import {useAnswer} from '../../Context/AnswerContext'
import { useQuestion } from '../../Context/QuestionContext'
import { useShake } from '../../Context/ShakeContext'
import { useBall } from '../../Context/BallOpenContext'

export const FetchData = () => {
    const { setAnswer } = useAnswer()
    const { setQuestion } = useQuestion()
    const { setShake } = useShake()
    const { setBallOpen } = useBall()

    const fetchingData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/neutralPhrases`)
            const data = await response.text()

            setTimeout(() => {
                setAnswer(data)
                setQuestion("")
                setShake(false)
                setBallOpen(true)
            }, 1950)

        } catch (error) {
            console.error("Error:", error)
        }
    }

    return { fetchingData }
}