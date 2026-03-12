import { useQuestion } from "../Context/QuestionContext"
import { useShake } from "../Context/ShakeContext"
import { useBall } from "../Context/BallOpenContext"
import { useAnswer } from "../Context/AnswerContext"

const InputField: React.FC = () => {

    let options = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No']
    const { question, setQuestion } = useQuestion();
    const { shake, setShake } = useShake();
    const { setBallOpen } = useBall();
    const { answer, setAnswer } = useAnswer();

    const buttonHandler = () => {
        if (!shake && question.includes("?") && question.length > 1) {
            setBallOpen(false)
            setShake(true)
            const randomOptionIndex = Math.floor(Math.random() * options.length)
            const randomOption = options[randomOptionIndex]
            setAnswer("")
            console.log(answer)
            setTimeout(() => { setAnswer(randomOption), setQuestion(""), setShake(false), setBallOpen(true) }, 1950)
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