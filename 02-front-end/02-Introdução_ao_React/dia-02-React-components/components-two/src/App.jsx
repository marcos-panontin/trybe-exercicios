import './App.css'
import Image from './Image'
import cat from './assets/cat.jpg'

function App() {

  return (
    <>
    <h1>Hello</h1>
<Image source={cat} alternativeText='Cute cat staring'/>
    </>
  )
}

export default App;