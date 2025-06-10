import axios from 'axios';
import { Task } from '../types/Task';

const API_BASE = 'http://localhost:8080/tasks';

export const getTasks = () => axios.get(`${API_BASE}/all`);

export const deleteTask = (id: string) => axios.delete(`${API_BASE}/delete/${id}`);

export const searchTasks = (query: string) => axios.get(`${API_BASE}/search/${query}`);

export const runCommand = (id: string) => axios.put(`${API_BASE}/execute/${id}`);

export const createTask = (task: Task) => axios.post(`${API_BASE}/create`, task);
