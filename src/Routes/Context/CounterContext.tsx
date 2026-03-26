import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type CounterContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const counterContext = createContext<CounterContextType|undefined>(undefined)

export const CounterProvider: React.FC<{children:ReactNode}> = ({children}) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <counterContext.Provider value={{counter, setCounter}}>
        {children}
    </counterContext.Provider>
  )
}

export const useCounter = (): CounterContextType => {
    const context = useContext(counterContext)
    if (!context) {
        throw new Error(`Counter context is not provided, ${context}`)
    }
    return context
}