import { useBall } from "../../Context/BallOpenContext"
import { useAnswer } from "../../Context/AnswerContext"
import { useShake } from "../../Context/ShakeContext"

import '../App.css'

import ballClosed from '../BallAssets/ballClosed.png'
import ballOpen from '../BallAssets/ballOpen.png'

const ImageHolder: React.FC = () => {
    const {answer} = useAnswer();
    const {isBallOpen} = useBall();
    const {shake} = useShake();

    return (
      <div className='imageHolder'>
        <img src={isBallOpen ? ballOpen : ballClosed} alt="ball" id="ball"
          className={(shake) ? "shakeIMG" : ""}
        />
        <p data-testid="answer" hidden={!isBallOpen}>{answer}</p>
      </div>
    )
}

export default ImageHolder