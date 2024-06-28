import './App.css';
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      {/* <Greet name="varshi">
        <p>varshi is a good girl</p>
      </Greet>
      <Welcome name="varshitha">
        <button>Active</button>
      </Welcome>
      <Hello /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
