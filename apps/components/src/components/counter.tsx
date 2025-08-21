"use client";

import { useCounter } from "@/components/provider";

export default function Counter({ children }: { children: React.ReactNode }) {
  const { count, increment } = useCounter();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={increment}
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-200 flex flex-col items-center justify-center gap-2 size-32"
      >
        {children}
        <div className="flex items-center gap-2">
          <span>Count:</span>
          <span className="font-bold">{count}</span>
        </div>
      </button>
    </div>
  );
}
