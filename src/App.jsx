import React from 'react'
import About from './About'
import Info from './Info'
import Interests from './Interests'
import "./index.css";

const App = () => {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
    </div>
  )
}

export default App