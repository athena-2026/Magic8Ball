import { useQuestion } from "../Context/QuestionContext"
import { useShake } from "../Context/ShakeContext"
import { useBall } from "../Context/BallOpenContext"
import { useAnswer } from "../Context/AnswerContext"
import { useCounter } from "../Context/CounterContext"
import {usePositive} from "../Context/PositiveContext"

const InputField: React.FC = () => {

    //let options = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No']
    const { question, setQuestion } = useQuestion();
    const { shake, setShake } = useShake();
    const { setBallOpen } = useBall();
    const { answer, setAnswer } = useAnswer();
    const {setCounter} = useCounter();
    const {setPositive} = usePositive();


    const buttonHandler = () => {
        if (!shake && question.includes("?") && question.length > 1) {
            setBallOpen(false)
            setShake(true)
            setCounter(prev =>prev+1)

            /*const randomOptionIndex = Math.floor(Math.random() * options.length)
            const randomOption = options[randomOptionIndex]*/

            const idx = Math.random() * 1
            console.log(`Idx: ${idx}`)

            if (idx < 0.5) {
                fetch('http://localhost:8080/api/positivePhrase')
                    .then(response => response.text())
                    .then(data => {
                        setTimeout(() => {
                            setAnswer(data)
                            setQuestion("")
                            setShake(false)
                            setBallOpen(true)
                            setPositive(true)

                        }, 1950)
                    })
                    .catch(error => console.error('Error: ', error))
            }
            else {
                fetch('http://localhost:8080/api/negativePhrase')
                    .then(response => response.text())
                    .then(data => {
                        setTimeout(() => {
                            setAnswer(data)
                            setQuestion("")
                            setShake(false)
                            setBallOpen(true)
                            setPositive(false)

                        }, 1950)
                    })
                    .catch(error => console.error('Error: ', error))
            }

            //setAnswer("")
            console.log(answer)
            //setTimeout(() => { setAnswer(fetchAnswer), setQuestion(""), setShake(false), setBallOpen(true) }, 1950)
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