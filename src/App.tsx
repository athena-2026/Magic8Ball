import { useRef, useState } from 'react'
import ballClosed from './assets/ballClosed.png'
import ballOpen from './assets/ballOpen.png'
import './App.css'


function App() {

  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const [shake, setShake] = useState(false)
  const [isBallOpen, setBallOpen] = useState(false);

  let options = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No']

  const buttonHandler = () => {
    if (!shake && question.includes("?") && question.length>1){
      setBallOpen(false)
      setShake(true) 
      const randomOptionIndex = Math.floor(Math.random()*options.length) 
      const randomOption = options[randomOptionIndex]
      setAnswer("")
      console.log(answer)
      setTimeout(()=>{setAnswer(randomOption), setQuestion(""), setShake(false), setBallOpen(true)}, 1920)
    }
  }

  return (
    <>
    <div id="appBody">
      <div id="header">
        <h1>Welcome to magic 8 ball</h1>
      </div>

      <div className='imageHolder'>
        <img src={isBallOpen?ballOpen:ballClosed} alt="ball" id="ball"
        className={(shake)?"shakeIMG":""}
        />
        <p hidden={!isBallOpen} className="answer">{answer}</p>
      </div>

      <br />
      <div className="inputField">
          <input type="text" id="question" placeholder='Enter a question...' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
          <button onClick={buttonHandler} id="submitQuestion" disabled={shake} >Submit question</button>
      </div>

      </div>
    </>
  )
}

export default App


