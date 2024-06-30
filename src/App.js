import React from "react";
import './styles.css'
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <Main/>
     <Intro h1="Available Stores" />
     <Footer/>
    </div>
  );
}

export default App;
