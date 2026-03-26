import './App.css'
import Title from './Components/Title';
import ImageHolder from './Components/ImageHolder';
import InputField from './Components/InputField';
import Counter from './Components/Counter'
import {AppProviders} from '../Context/ContextProvider';


function App() {
  document.body.className="Original"
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


