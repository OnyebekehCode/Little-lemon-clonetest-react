import React from "react";
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
     <Intro h2="b" />
     <Intro h3="c" />
     <Footer/>
    </div>
  );
}

export default App;
