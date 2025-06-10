import React, { useState } from 'react';
import './App.css';
import { Layout, Typography, Divider, Card, Row, Col } from 'antd';
import TaskForm from './components/Taskform';
import TaskTable from './components/Tasktable';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header style={{ background: '#001529', padding: '10px 20px' }}>
        <Title style={{ color: 'white', margin: 0 }} level={3}>
          Welcome To Task Manager 
        </Title>
      </Header>
      <Content style={{ padding: '30px' }}>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} md={20} lg={16}>
            <Card title="Create New Task" bordered={false} style={{ borderRadius: '12px' }}>
              <TaskForm onCreated={() => setRefreshKey((prev) => prev + 1)} />
            </Card>
            <Divider />
            <Card title="Task List" bordered={false} style={{ borderRadius: '12px' }}>
              <TaskTable key={refreshKey} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
