import { useState } from "react";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { env } from "../../env";
import {
  CheckSquare,
  Edit2,
  Square,
  Trash2,
  AlertCircle,
  AlertTriangle,
  AlertOctagon,
} from "lucide-react";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import Form from "../todolist/Form";
import { TPriority, TTodo } from "../../types/todolist";
import { useHandleMutation } from "../../hooks/useHandleMutation";
import {
  deleteTodoQr,
  newTodoQr,
  toggleTodoQr,
  updateTodoQr,
} from "../../lib/queries";

type Priority = "low" | "medium" | "high";

const PriorityIcon = ({ priority }: { priority: TPriority }) => {
  switch (priority) {
    case "low":
      return <AlertCircle className="w-4 h-4 text-blue-500" />;
    case "medium":
      return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    case "high":
      return <AlertOctagon className="w-4 h-4 text-red-500" />;
  }
};

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [weatherTag, setWeatherTag] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [editingTodo, setEditingTodo] = useState<TTodo | null>(null);
  const [priority, setPriority] = useState<TPriority>("low");

  const todoList = useQuery<{ data: TTodo[] } | null, Error>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get(`${env.baseUrl}/todos`);
      return response.data;
    },
  });

  const { data, isLoading, error } = todoList;

  const todos = data?.data;
  const addTodo = useHandleMutation(newTodoQr, [todoList]);
  const toggleTodoMutation = useHandleMutation(toggleTodoQr, [todoList]);
  const updateTodoMutation = useHandleMutation(updateTodoQr, [todoList]);
  const deleteTodoMutation = useHandleMutation(deleteTodoQr, [todoList]);

  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      setFormError("Please enter a todo text");
      return;
    }

    if (!weatherTag.trim()) {
      setFormError("Please enter a weather tag");
      return;
    }

    if (editingTodo) {
      updateTodoMutation.mutate({
        ...editingTodo,
        text: newTodo,
        weatherTag,
        priority,
      });
    } else {
      addTodo.mutate({ text: newTodo, weatherTag, priority });
    }

    setNewTodo("");
    setWeatherTag("");
    setPriority("low");
    setFormError(null);
    setEditingTodo(null);
  };

  const startEditing = (todo: TTodo) => {
    setEditingTodo(todo);
    setNewTodo(todo.text);
    setWeatherTag(todo.weatherTag);
    setPriority(todo.priority as Priority);
  };

  const errorMessage =
    error instanceof AxiosError ? error.response?.data?.error : null;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Todo List</h2>
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        priority={priority}
        setPriority={setPriority}
        weatherTag={weatherTag}
        setWeatherTag={setWeatherTag}
        editingTodo={editingTodo}
        formError={formError}
        handleTodoSubmit={handleTodoSubmit}
      />

      {isLoading && <Loader />}
      {errorMessage && <Error errorMessage={errorMessage} />}

      <ul className="space-y-3">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center flex-grow mr-4">
              <button
                onClick={() => toggleTodoMutation.mutate(todo)}
                className="mr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {todo.completed ? (
                  <CheckSquare className="w-5 h-5" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
              </button>
              <div className="max-w-full flex items-center justify-start break-all flex-grow">
                <span
                  className={`${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  {todo.weatherTag}
                </span>
              </div>
              <span className="ml-2" title={`Priority: ${todo.priority}`}>
                <PriorityIcon priority={todo.priority as Priority} />
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => startEditing(todo)}
                className="p-2 text-yellow-600 hover:text-yellow-700 focus:outline-none"
                aria-label="Edit todo"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteTodoMutation.mutate(todo.id)}
                className="p-2 text-red-600 hover:text-red-700 focus:outline-none"
                aria-label="Delete todo"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
