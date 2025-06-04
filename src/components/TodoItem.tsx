
import { Check, X } from "lucide-react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className={`group flex items-center gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:shadow-md ${
      todo.completed ? 'bg-green-50 border-green-200' : 'border-gray-200 hover:border-blue-300'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
        }`}
      >
        {todo.completed && <Check size={14} />}
      </button>
      
      <span className={`flex-1 transition-all duration-200 ${
        todo.completed 
          ? 'text-green-700 line-through opacity-70' 
          : 'text-gray-800'
      }`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-all duration-200"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
