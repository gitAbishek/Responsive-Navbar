import "./index.css"
import Navbar from "./Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Project from "./components/Project";
import { Routes,Route } from "react-router-dom";


function App() {
  return(
    <>
    <Navbar/>
    <Routes>
     <Route path="/" exact={true} element={<Home/>}/>
     <Route path="/about" exact={true} element={<About/>}/>
     <Route path="/contact" exact={true} element={<Contact/>}/>
     <Route path="/services" exact={true} element={<Services/>}/>
     <Route path="/project" exact={true} element={<Project/>}/>
    </Routes>
    </>
  )
}

export default App;
