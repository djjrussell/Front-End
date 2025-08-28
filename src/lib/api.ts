import axios from "axios";
import { Task, TaskDto } from "./../types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const taskApi = {
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get("/api/tasks");
    return response.data;
  },

  createTask: async (task: TaskDto): Promise<Task> => {
    const response = await api.post("/api/tasks", task);
    return response.data;
  },

  updateTask: async (id: number, task: TaskDto): Promise<Task> => {
    const response = await api.put(`/api/tasks/${id}`, task);
    return response.data;
  },

  deleteTask: async (id: number): Promise<void> => {
    await api.delete(`/api/tasks/${id}`);
  },

  getTask: async (id: number | null): Promise<Task> => {
    const response = await api.get(`/api/tasks/${id}`);
    return response.data;
  },
};
