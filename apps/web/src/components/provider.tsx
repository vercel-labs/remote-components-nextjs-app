"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import confetti from "canvas-confetti";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterProviderProps {
  children: ReactNode;
}

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    confetti();
  };
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
