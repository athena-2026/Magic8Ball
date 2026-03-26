import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type ShakeContextType = {
  shake:boolean;
  setShake: (value: boolean)=>void
}

const shakeContext = createContext<ShakeContextType|undefined>(undefined)

export const ShakeProvider: React.FC<{children:ReactNode}> = ({children}) => {
  const [shake, setShake] = useState<boolean>(false);
  return (
    <shakeContext.Provider value={{shake, setShake}}>
        {children}
    </shakeContext.Provider>
  )
}

export const useShake = (): ShakeContextType => {
    const context = useContext(shakeContext)
    if (!context) {
        throw new Error('Shake context is not provided')
    }
    return context
}