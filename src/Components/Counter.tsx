import '../App.css'
import { useCounter } from "../Context/CounterContext"

function Counter() {
  const {counter} = useCounter()
  return (
    <>
      <p className='counter'>You have asked {counter} questions</p>
    </>
  )
}

export default Counter