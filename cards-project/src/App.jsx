
import './App.css'
import { useState } from 'react'
import { contacts } from './contacts'
import Card from './components/Card'
import Login from './components/Login'
import SubmitColor from './SubmitColor'
import ShowCurrentTime from './components/ShowCurrentTime'
import AdressForm from './components/AdressForm'


import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)
  let key = 0
  
    function getLogin(){
      setLoggedIn (true)
    }
    
    function increment(){
      setCount(count+1)
    }
    function decrement(){
      if (count >0){

        setCount(count -1)
      }
    }
    const cards = loggedIn  && <div>
      <AdressForm/>
   <SubmitColor/>
   <ShowCurrentTime/>


      <Calculator/>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
        
        {contacts.map((contact) =>{
          key +=1
          return  <div key={key}>

            <Card name = {contact.name} image = {contact.image} phone = {contact.phone} email = {contact.email}/>
          </div> 
        })}
    </div> 
    const login = !loggedIn && <Login onClick = {getLogin}/>

  
  return (
    <>
    
   {cards}
   {login}
      
    </>
  )
}

export default App
