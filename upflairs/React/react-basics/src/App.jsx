import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



let element = <div>
  <h1>Hyy Sahil...</h1>
</div>

function Header(){
  return <div>
    this is sahil
  </div>
}

  function App(){
  return (
    <>
     hello world!!!
     {element}
     <Header ></Header>
    
    </>
  )
  }

export default App
