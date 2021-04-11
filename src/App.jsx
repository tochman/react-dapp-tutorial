import React from 'react'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

const App = () => {
  console.log("Greeter ABI: ", Greeter.abi)
  return (
    <>
      <h1>Getting started....</h1>
    </>
  )
}

export default App

