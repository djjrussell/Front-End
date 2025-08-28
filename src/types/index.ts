export interface Task {
  id: number;
  title: string;
  color?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TaskDto {
  title?: string;
  color?: string;
  completed?: boolean;
}

export const TASK_COLORS = [
  { name: "Blue", value: "blue", class: "bg-blue-500" },
  { name: "Red", value: "red", class: "bg-red-500" },
  { name: "Green", value: "green", class: "bg-green-500" },
  { name: "Yellow", value: "yellow", class: "bg-yellow-500" },
  { name: "Purple", value: "purple", class: "bg-purple-500" },
  { name: "Pink", value: "pink", class: "bg-pink-500" },
];
