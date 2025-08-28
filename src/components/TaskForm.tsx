"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { taskApi } from "@/lib/api";
import Link from "next/link";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

// Color options available for tasks
const colorOptions = [
  { name: "red", value: "#E25858" },
  { name: "orange", value: "#E28858" },
  { name: "yellow", value: "#E2D058" },
  { name: "green", value: "#58E280" },
  { name: "lightblue", value: "#58C4E2" },
  { name: "blue", value: "#5885E2" },
  { name: "purple", value: "#8858E2" },
  { name: "pink", value: "#E258B2" },
  { name: "brown", value: "#A05A31" },
];

export default function TaskForm() {
  const router = useRouter();
  const params = useParams();
  const taskId = params?.id ? Number(params.id) : null;
  const isEditMode = !!taskId;

  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorOptions[5].value); // Default to blue
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode) {
      fetchTask();
    }
  }, [isEditMode, taskId]);

  const fetchTask = async () => {
    try {
      setLoading(true);
      const task = await taskApi.getTask(taskId);
      setTitle(task.title);
      if (task.color) {
        setSelectedColor(task.color);
      }
    } catch (err) {
      setError("Failed to fetch task");
      console.error("Error fetching task:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    try {
      setSaving(true);

      if (isEditMode) {
        await taskApi.updateTask(taskId, { title, color: selectedColor });
      } else {
        await taskApi.createTask({
          title,
          color: selectedColor,
          completed: false,
        });
      }

      router.push("/");
    } catch (err) {
      setError(`Failed to ${isEditMode ? "update" : "create"} task`);
      console.error(`Error ${isEditMode ? "updating" : "creating"} task:`, err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A]">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-100 p-4 md:p-6 max-w-3xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-center mb-16 mt-8">
        <div className="flex items-center">
          <span className="text-blue-500 mr-2 text-xl">🚀</span>
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">Todo</span>
            <span className="text-purple-500">App</span>
          </h1>
        </div>
      </header>

      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
        >
          <FaArrowLeft className="h-6 w-6 mr-2 font-extrabold text-white" />
        </Link>
      </div>

      <div className="bg-[#262626] rounded-lg p-6 border border-[#333333]">
        {error && (
          <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-blue-500 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Brush your teeth"
              className="w-full bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-blue-500 mb-2">
              Color
            </label>
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedColor === color.value
                      ? "ring-2 ring-white ring-offset-2 ring-offset-[#262626]"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Select ${color.name} color`}
                >
                  {selectedColor === color.value && (
                    <FaCheck className="h-4 w-4 text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 w-full justify-center"
            >
              {isEditMode ? (
                <>
                  Save <FaCheck className="h-4 w-4" />
                </>
              ) : (
                "Add Task"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
