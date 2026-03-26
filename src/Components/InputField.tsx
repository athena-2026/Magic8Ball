import { useQuestion } from "../Context/QuestionContext"
import { useShake } from "../Context/ShakeContext"
import { useBall } from "../Context/BallOpenContext"
import { useCounter } from "../Context/CounterContext"
import { usePositive } from "../Context/PositiveContext"
import { FetchData } from "./FetchData"


const InputField: React.FC = () => {


    const { question, setQuestion } = useQuestion();
    const { shake, setShake } = useShake();
    const { setBallOpen } = useBall();
    const {setCounter} = useCounter();
    const {setPositive} = usePositive();
    const {fetchingData} = FetchData();



    const buttonHandler = () => {
        if (!shake && question.includes("?") && question.length > 1) {
            setBallOpen(false)
            setShake(true)
            setCounter(prev =>prev+1)

            const isPositive = Math.random() <0.5
            let phrase = ""
            if (isPositive) {
                phrase = "positivePhrase"
                setPositive(true)
            } else {
                phrase = "negativePhrase"
                setPositive(false)
            }
            fetchingData(phrase)
        }
    }

    return (
        <div className="inputField">
            <input type="text" id="question" placeholder='Enter a question...' value={question} onChange={(e) => setQuestion(e.target.value)} />
            <button onClick={buttonHandler} id="submitQuestion" disabled={shake} >Submit question</button>
        </div>
    )
}

export default InputField