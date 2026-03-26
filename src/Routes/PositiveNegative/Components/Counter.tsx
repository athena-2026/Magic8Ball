import '../Edition1.css'
import { useCounter } from "../../Context/CounterContext"

function Counter() {
  const {counter} = useCounter()
  return (
    <>
    <p className='counter'>You have asked {counter} question(s)</p>
    </>
  )
}

export default Counter