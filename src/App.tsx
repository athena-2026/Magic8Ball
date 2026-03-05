import { useState } from 'react'
import ballClosed from './assets/ballClosed.png'
import ballOpen from './assets/ballOpen.png'
import ball from './assets/ball.png'
import './App.css'


function App() {

  const [answer, setAnswer] = useState("")
  const [nextAnswer, setNextAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const [shake, setShake] = useState(false)

  let options = ['Yes', 'No', 'Maybe..', 'Definitely not']

  const buttonHandler = () => {
    if (!shake && question.includes("?") && question.length>1){
      setShake(true) 
      const randomOptionIndex = Math.floor(Math.random()*options.length) 
      const randomOption = options[randomOptionIndex]
      setAnswer(randomOption)
      console.log(answer)
      setTimeout(()=>setNextAnswer(answer), 2000)
    }
  }

  return (
    <>
    <div id="appBody">
      <h1>Welcome to magic 8 ball</h1>
      <img src={ball} alt="" id="ball" onAnimationEnd={()=>setShake(false)} className={shake? "shakeIMG":""}/>
      <br />
      <div className="inputField">
          <input type="text" id="question" placeholder='Enter a question...' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
          <button onClick={buttonHandler} id="submitQuestion" disabled={shake} >Submit question</button>
      </div>
          <p>{nextAnswer}</p>
      </div>
    </>
  )
}

export default App
