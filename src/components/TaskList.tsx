import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "@/types";

interface Props {
  handleToggleComplete: (id: number, completed: boolean) => void;
  handleDeleteTask: (id: number) => void;
  tasks: Task[];
  totalTasks: number;
}

const TaskList = ({
  totalTasks,
  tasks,
  handleDeleteTask,
  handleToggleComplete,
}: Props) => {
  return (
    <div className="space-y-3">
      {totalTasks === 0 ? (
        <div className="text-center py-12 flex flex-col items-center">
          <ClipboardDocumentIcon className="h-14 w-14 text-gray-700 mb-4" />
          <div className="text-gray-300 text-lg font-bold mb-2">
            You don't have any tasks registered yet.
          </div>
          <div className="text-gray-500">
            Create tasks and organize your to-do items.
          </div>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
