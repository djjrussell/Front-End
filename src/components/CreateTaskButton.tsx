import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CreateTaskButton = () => {
  return (
    <Link
      href="/create"
      className="z-30 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg mb-16 transition-colors relative"
    >
      <PlusIcon className="h-5 w-5" />
      Create Task
    </Link>
  );
};

export default CreateTaskButton;
