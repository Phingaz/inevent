import React from "react";
import { Edit2, Plus } from "lucide-react";
import { TTodo, TPriority } from "../../types/todolist";
import { priorityOptions } from "../../constants/todolist";

type FormProps = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  weatherTag: string;
  setWeatherTag: React.Dispatch<React.SetStateAction<string>>;
  priority: TPriority;
  setPriority: React.Dispatch<React.SetStateAction<TPriority>>;
  editingTodo: TTodo | null;
  handleTodoSubmit: (e: React.FormEvent) => void;
  formError: string | null;
};

const Form: React.FC<FormProps> = ({
  formError,
  newTodo,
  setNewTodo,
  weatherTag,
  setWeatherTag,
  priority,
  setPriority,
  editingTodo,
  handleTodoSubmit,
}) => {
  return (
    <form onSubmit={handleTodoSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Todo text"
          className={`flex-grow px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-gray-600 transition-all ${
            formError ? "border-red-500" : ""
          }`}
        />
        <input
          type="text"
          value={weatherTag}
          onChange={(e) => setWeatherTag(e.target.value)}
          placeholder="Weather tag"
          className={`flex-grow sm:flex-grow-0 px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-gray-600 transition-all ${
            formError ? "border-red-500" : ""
          }`}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as TPriority)}
          className={`px-4 py-2 border border-gray-300 text-gray-600 rounded-md outline-none focus:border-gray-600 transition-all capitalize ${
            formError ? "border-red-500" : ""
          }`}
        >
          {priorityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-3 w-full px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-600 transition-all duration-200 flex items-center justify-center"
      >
        {editingTodo ? (
          <>
            <Edit2 className="w-4 h-4 mr-2" />
            Update Todo
          </>
        ) : (
          <>
            <Plus className="w-4 h-4 mr-2" />
            Add Todo
          </>
        )}
      </button>
      {formError && (
        <p className="text-red-500 mt-2 text-sm font-[500] text-center">
          {formError}
        </p>
      )}
    </form>
  );
};

export default Form;
