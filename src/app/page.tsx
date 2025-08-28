"use client";

import { useState, useEffect } from "react";
import { Task } from "@/types";
import { taskApi } from "@/lib/api";
import CreateTaskButton from "@/components/CreateTaskButton";
import Header from "@/components/Header";
import TaskTabs from "@/components/TaskTabs";
import ErrorMessage from "@/components/ErrorMessage";
import TaskList from "@/components/TaskList";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [activeTab, setActiveTab] = useState("tasks");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await taskApi.getTasks();
      setTasks(fetchedTasks);
    } catch (err) {
      setError("Failed to fetch tasks");
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (id: number, completed: boolean) => {
    try {
      const updatedTask = await taskApi.updateTask(id, { completed });
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await taskApi.deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A]">
        <div className="text-gray-400">Loading tasks...</div>
      </div>
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-100 p-4 md:p-6 max-w-3xl mx-auto">
      <Header />
      <CreateTaskButton />
      <TaskTabs totalTasks={totalTasks} completedTasks={completedTasks} />
      {error && <ErrorMessage error={error} />}
      <TaskList
        handleToggleComplete={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
        totalTasks={totalTasks}
      />
    </div>
  );
}
