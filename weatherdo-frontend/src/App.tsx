import { QueryClient, QueryClientProvider } from "react-query";
import WeatherDisplay from "./components/sections/WeatherDisplay";
import TodoList from "./components/sections/TodoList";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0 } },
});

function WeatherDoContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[700px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            WeatherDo
          </h1>
          <p className="text-center text-sm font-[000] text-gray-600 mt-2">
            Seamlessly manage your tasks while staying in tune with the weather.
          </p>

          <div className="flex flex-col gap-5 mt-2">
            <WeatherDisplay />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeatherDo() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDoContent />
    </QueryClientProvider>
  );
}
