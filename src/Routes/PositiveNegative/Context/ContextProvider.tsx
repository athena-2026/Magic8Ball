import { AnswerProvider } from "./AnswerContext"
import { BallProvider } from "./BallOpenContext"
import { QuestionProvider } from "./QuestionContext"
import { ShakeProvider } from "./ShakeContext"
import { CounterProvider } from "./CounterContext"
import { PositiveProvider } from "./PositiveContext"
import type { ReactNode } from "react"

const composeProviders = (...providers: React.ComponentType<{children: ReactNode}>[])=>(
    {children}:{children: ReactNode}) =>
        providers.reduceRight(
            (acc,Provider) => <Provider>{acc}</Provider>, children
        )

export const AppProviders = composeProviders(AnswerProvider,BallProvider,QuestionProvider,ShakeProvider,
    CounterProvider, PositiveProvider)