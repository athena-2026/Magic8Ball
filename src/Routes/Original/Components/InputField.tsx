import { useQuestion } from "../../Context/QuestionContext"
import { useShake } from "../../Context/ShakeContext"
import { useBall } from "../../Context/BallOpenContext"
import { useCounter } from "../../Context/CounterContext"
import { FetchData } from "./FetchData"


const InputField: React.FC = () => {


    const { question, setQuestion } = useQuestion();
    const { shake, setShake } = useShake();
    const { setBallOpen } = useBall();
    const {setCounter} = useCounter();
    const {fetchingData} = FetchData();



    const buttonHandler = () => {
        if (!shake && question.includes("?") && question.length > 1) {
            setBallOpen(false)
            setShake(true)
            setCounter(prev =>prev+1)

            fetchingData()
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