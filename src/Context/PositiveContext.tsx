import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type PositiveContextType = {
  isPositive: boolean;
  setPositive: (value: boolean)=>void
}

const positiveContext = createContext<PositiveContextType|undefined>(undefined)

export const PositiveProvider: React.FC<{children:ReactNode}> = ({children}) => {
  const [isPositive, setPositive] = useState<boolean>(true);
  return (
    <positiveContext.Provider value={{isPositive, setPositive}}>
        {children}
    </positiveContext.Provider>
  )
}

export const usePositive = (): PositiveContextType => {
    const context = useContext(positiveContext)
    if (!context) {
        throw new Error(`Positive context is not provided, ${context}`)
    }
    return context
}