import { Search } from "lucide-react";
import React from "react";

type FormProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
};

const Form = ({ city, setCity, isLoading, handleSubmit }: FormProps) => {
  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Start typing a city name to search..."
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md outline-none ring-0 focus:border-gray-600 transition-all"
        />
        <button
          type="submit"
          disabled={isLoading || !city}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-600 focus:outline-none disabled:opacity-50 transition-all"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default Form;
