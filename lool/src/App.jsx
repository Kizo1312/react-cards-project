import "./App.css";
import ColorBoxes from "./components/colorBoxes/ColorBoxes";
import Contact from "./components/contact/Contact";
import Users from "./components/Users/Users";

import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Users/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxes" element={<ColorBoxes />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
