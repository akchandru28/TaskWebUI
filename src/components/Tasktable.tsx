import React, { useEffect, useState } from 'react';
import { Table, Button, Input, Popconfirm, message } from 'antd';
import { Task } from '../types/Task';
import {
  getTasks,
  deleteTask,
  searchTasks,
  runCommand,
} from '../api/Taskservice';
import Commandmodal from './Commandmodal';

const Tasktable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [commandOutput, setCommandOutput] = useState('');
  const [selectedTaskName, setSelectedTaskName] = useState('');

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      message.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      fetchTasks();
      return;
    }
    try {
      const response = await searchTasks(searchQuery);
      setTasks(response.data);
    } catch (err) {
      message.error('Search failed');
    }
  };

  // Handle task delete
  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      message.success('Task deleted');
      fetchTasks();
    } catch {
      message.error('Delete failed');
    }
  };

  // Handle command execution
  const handleRunCommand = async (id: string, name: string) => {
    try {
      const response = await runCommand(id);
      setCommandOutput(response.data.output || response.data || 'No output');
      setSelectedTaskName(name);
      setModalVisible(true);
    } catch {
      message.error('Failed to run command');
    }
  };

  // Table columns including new "Owner"
  const columns = [
    { title: 'Task Name', dataIndex: 'name', key: 'name' },
    { title: 'Owner', dataIndex: 'owner', key: 'owner' }, // ✅ added owner field
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Task) => (
        <>
          <Button type="link" onClick={() => handleRunCommand(record.id!, record.name)}>
            Run Command
          </Button>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id!)}>
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <Input.Search
        placeholder="Search by task name"
        enterButton
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        style={{ maxWidth: 400, marginBottom: 20 }}
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={tasks}
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
      <Commandmodal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        taskName={selectedTaskName}
        output={commandOutput}
      />
    </>
  );
};

export default Tasktable;
