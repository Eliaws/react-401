import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from "./Components/Footer";

import Home from './Pages/Home';
import About from "./Pages/About";
import Activites from "./Pages/Activites";
import Promouvoir from "./Pages/Promouvoir";
import Apprendre from "./Pages/Apprendre";
import Divers from "./Pages/Divers";
import Adherer from "./Pages/Adherer";
import Forum from "./Pages/Forum";

import ContactForm from './Components/ContactForm';
import SessionForm from './Components/SessionForm';



function App() {
  return (
    <div className="App">
          <Router>
          <Header/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Activites" element={<Activites/>} />
                <Route path="/Promouvoir" element={<Promouvoir/>} />
                <Route path="/Apprendre" element={<Apprendre/>} />
                <Route path="/Divers" element={<Divers/>} />
                <Route path="/Adherer" element={<Adherer/>} />
              </Routes>
          </Router>
          <ContactForm/>
          <SessionForm/>

        <Footer/>
    </div>
  );
}

export default App;
