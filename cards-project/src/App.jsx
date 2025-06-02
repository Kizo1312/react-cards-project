import "./App.css";
import { useState } from "react";
import { contacts } from "./contacts";
import Card from "./components/Card";
import Login from "./components/Login";
import SubmitColor from "./SubmitColor";
import ShowCurrentTime from "./components/ShowCurrentTime";
import AdressForm from "./components/AdressForm";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";

function App() {
  const [kontakti, setKontakti] = useState(contacts);
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  let key = 0;
  function handleDeleteCard(id) {
    const newCards = kontakti.filter((kontakt) => {
      return kontakt.id != id;
    });

    setKontakti(newCards);
  }

  function getLogin() {
    setLoggedIn(true);
  }

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const cards = loggedIn && (
    <div>
      <AdressForm />
      <SubmitColor />
      <ShowCurrentTime />

      <Calculator />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>

      {kontakti.map((contact) => {
        key += 1;
        return (
          <div key={key}>
            <Card
              id={contact.id}
              name={contact.name}
              image={contact.image}
              phone={contact.phone}
              email={contact.email}
              onClick={() => handleDeleteCard(contact.id)}
            />
          </div>
        );
      })}
    </div>
  );
  const login = !loggedIn && <Login onClick={getLogin} />;

  return (
    <>
    <Navbar/>
    
      {cards}
      {login}
    </>
  );
}

export default App;
