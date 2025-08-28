"use client";

import { Task } from "@/types";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({
  task,
  onToggleComplete,
  onDelete,
}: TaskCardProps) {
  const { id, title, completed } = task;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleToggleComplete = () => {
    onToggleComplete(id, !completed);
  };

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    onDelete(id);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <div className="bg-cardBackground rounded-lg p-4 flex items-center gap-3 border border-[#333333] hover:border-[#404040] transition-colors">
        <button
          onClick={handleToggleComplete}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            completed ? "bg-purple-500 border-purple-500" : "border-blue-500"
          }`}
          aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {completed && <CheckIcon className="w-3 h-3 text-white" />}
        </button>

        <Link
          href={`/edit/${id}`}
          className={`flex-1 font-normal text-sm leading-tight ${
            completed ? "line-through text-gray-500" : "text-[#F2F2F2]"
          }`}
        >
          {title ||
            "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."}
        </Link>

        <button
          onClick={handleDelete}
          className="text-gray-400 hover:text-red-400 p-1 rounded transition-colors"
          title="Delete task"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>

      <ConfirmDialog
        isOpen={showDeleteDialog}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteDialog(false)}
      />
    </>
  );
}
