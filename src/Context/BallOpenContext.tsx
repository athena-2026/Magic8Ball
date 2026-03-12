import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type BallOpenContextType = {
  isBallOpen: boolean;
  setBallOpen: (value: boolean)=> void
}

const ballOpenContext = createContext<BallOpenContextType|undefined>(undefined)

export const BallProvider: React.FC<{children:ReactNode}> = ({children}) => {
  const [isBallOpen, setBallOpen] = useState<boolean>(false);
  return (
    <ballOpenContext.Provider value={{isBallOpen, setBallOpen}}>
        {children}
    </ballOpenContext.Provider>
  )
}

export const useBall = (): BallOpenContextType => {
    const context = useContext(ballOpenContext)
    if (!context) {
        throw new Error('BallOpen context is not provided')
    }
    return context
}