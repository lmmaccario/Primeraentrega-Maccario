import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar/Navbar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  
  

  const addCount = () => {
    setCount(count + 1)
  }


  return (
    <div>
      <Navbar />

      <Titulo />
      
      <label> 
        <strong>{ count }</strong> 
      </label>
      <button onClick={addCount}> +1 </button>

      <Footer />
    </div>
  )
}

export default App
