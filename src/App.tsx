import './App.css'

import Title from './Components/Title';
import ImageHolder from './Components/ImageHolder';
import InputField from './Components/InputField';
import Counter from './Components/Counter'
import Navbar from './Components/Navbar';
import {AppProviders} from './Context/ContextProvider';


function App() {

  /*
  const [answer, setAnswer] = useState<string>("")
  const [question, setQuestion] = useState<string>("")
  const [shake, setShake] = useState<boolean>(false)
  const [isBallOpen, setBallOpen] = useState<boolean>(false);
 

  let options = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No']

  const buttonHandler = () => {
    if (!shake && question.includes("?") && question.length>1){
      setBallOpen(false)
      setShake(true) 
      const randomOptionIndex = Math.floor(Math.random()*options.length) 
      const randomOption = options[randomOptionIndex]
      setAnswer("")
      console.log(answer)
      setTimeout(()=>{setAnswer(randomOption), setQuestion(""), setShake(false), setBallOpen(true)}, 1950)
    }
  }
  */
  return (

    <>
    <AppProviders>
      <Navbar/>
      <Title />
      <ImageHolder/>
      <br />
      <InputField/>
      <Counter/>
    </AppProviders>
    </>
  )
}

export default App


