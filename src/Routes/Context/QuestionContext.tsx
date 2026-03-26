import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type QuestionContextType = {
  question: string;
  setQuestion: (value: string)=>void
}

const questionContext = createContext<QuestionContextType|undefined>(undefined)

export const QuestionProvider: React.FC<{children:ReactNode}> = ({children}) => {
  const [question, setQuestion] = useState<string>("");
  return (
    <questionContext.Provider value={{question, setQuestion}}>
        {children}
    </questionContext.Provider>
  )
}

export const useQuestion = (): QuestionContextType => {
    const context = useContext(questionContext)
    if (!context) {
        throw new Error('Question context is not provided')
    }
    return context
}