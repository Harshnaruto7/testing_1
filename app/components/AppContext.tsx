"use client";
import { createContext, useState } from "react";

interface childrenProp{
    children: React.ReactNode
}


export const AppContext = createContext();

export function AppProvider({ children }: childrenProp) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  return (
    <AppContext.Provider value={{ count, increase }}>
      {children}
    </AppContext.Provider>
  );
}
