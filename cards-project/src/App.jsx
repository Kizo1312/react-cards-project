
import './App.css'
import { contacts } from './contacts'
import Card from './components/Card'
import Login from './components/Login'

import Calculator from './components/Calculator'

function App() {
  let key = 0
    let loggedIn = true
    function getLogin(){
      loggedIn = true
    }
    console.log(loggedIn)
    const cards = loggedIn  && <div>

      <Calculator/>
        
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
