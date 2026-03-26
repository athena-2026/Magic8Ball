import './Edition1.css'
import Title from './Components/Title';
import ImageHolder from './Components/ImageHolder';
import InputField from './Components/InputField';
import Counter from './Components/Counter'
import {AppProviders} from '../Context/ContextProvider';


function App() {
  document.body.className="Edition1"
  return (
    <>
        <AppProviders>
          <Title />
          <ImageHolder />
          <br />
          <InputField />
          <Counter />
        </AppProviders>

    </>
  )
}

export default App


