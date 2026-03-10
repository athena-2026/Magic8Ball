import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type AnswerContextType = {
  answer: string;
  setAnswer: (value: string)=>void
}

const answerContext = createContext<AnswerContextType|undefined>(undefined)

export const AnswerProvider: React.FC<{children:ReactNode}> = ({children}) => {
  const [answer, setAnswer] = useState<string>("");
  return (
    <answerContext.Provider value={{answer, setAnswer}}>
        {children}
    </answerContext.Provider>
  )
}

export const useAnswer = (): AnswerContextType => {
    const context = useContext(answerContext)
    if (!context) {
        throw new Error('Answer context is not provided')
    }
    return context
}