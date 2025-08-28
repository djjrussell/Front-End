interface TaskTabsProps {
  totalTasks: number;
  completedTasks: number;
}

const TaskTabs = ({ totalTasks, completedTasks }: TaskTabsProps) => {
  return (
    <div className="flex justify-between border-b border-gray-700 mb-6">
      <div className={`flex items-center gap-2 pb-4 px-1 `}>
        <span className="font-bold text-blueText">Tasks</span>
        <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full text-xs">
          {totalTasks}
        </span>
      </div>
      <div className={`flex items-center gap-2 pb-4 px-1 `}>
        <span className="font-bold text-blueText">Completed</span>
        <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full text-xs">
          {completedTasks} of {totalTasks}
        </span>
      </div>
    </div>
  );
};

export default TaskTabs;
