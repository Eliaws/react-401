import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
