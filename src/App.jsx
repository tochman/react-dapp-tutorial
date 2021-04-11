import React, { useState } from 'react'
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

const App = () => {
  const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  console.log("Greeter ABI: ", Greeter.abi)
  const [greeting, setGreetingValue] = useState()

  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }

  const fetchGreeting = async () => {

    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (error) {
        console.log("Error: ", error)
      }
    }

  }

  const setGreeting = async () => {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      fetchGreeting()
    }

  }
  return (
    <>
      <h1>Getting started....</h1>
      <button
        onClick={fetchGreeting}>Fetch greeting</button>
      <button
        onClick={setGreeting}>Set greeting</button>
      <input
        placeholder="Set greeting"
        onChange={event => setGreetingValue(event.target.value)}
      />
    </>
  )
}

export default App