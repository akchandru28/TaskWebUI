import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Task } from '../types/Task';
import { createTask } from '../api/Taskservice';

const { TextArea } = Input;

interface TaskFormProps {
  onCreated: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreated }) => {
  const [form] = Form.useForm();

  const handleFinish = async (values: Task) => {
    try {
      await createTask(values);
      message.success('Task created successfully!');
      form.resetFields();
      onCreated();
    } catch (error) {
      message.error('Failed to create task');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      autoComplete="off"
      style={{ maxWidth: 600, padding: '1rem', backgroundColor: '#fff', borderRadius: 8 }}
    >
      <Form.Item
        label="Task Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the task name' }]}
      >
        <Input placeholder="Enter task name" />
      </Form.Item>

      <Form.Item
        label="Owner"
        name="owner"
        rules={[{ required: true, message: 'Please enter the owner' }]}
      >
        <Input placeholder="Enter owner name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter a description' }]}
      >
        <TextArea rows={3} placeholder="Enter task description" />
      </Form.Item>

      <Form.Item
        label="Shell Command"
        name="command"
      >
        <Input placeholder="Shell command (e.g., ls -la)" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
