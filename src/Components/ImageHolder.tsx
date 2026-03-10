import { useBall } from "../Context/BallOpenContext"
import { useAnswer } from "../Context/AnswerContext"
import { useShake } from "../Context/ShakeContext"

import ballClosed from './assets/ballClosed.png'
import ballOpen from './assets/ballOpen.png'

const ImageHolder: React.FC = () => {
    const {answer} = useAnswer();
    const {isBallOpen} = useBall();
    const {shake} = useShake();

    return (
      <div className='imageHolder'>
        <img src={isBallOpen ? ballOpen : ballClosed} alt="ball" id="ball"
          className={(shake) ? "shakeIMG" : ""}
        />
        <p hidden={!isBallOpen} className="answer">{answer}</p>
      </div>
    )
}

export default ImageHolder