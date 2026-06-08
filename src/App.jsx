import './App.css'
import { Contador } from './components/Contador'


function App() {
  return (
    <>

      <Contador valor={0} min={0} max={20} step={1} />
    
    </>
  )
}

export default App
