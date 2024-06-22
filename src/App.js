import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <Main/>
     <Main h1="a" h2="b"/>
     <Main h2="c" h3="d"/>
     <Main h3="e" h1="f"/>
     <Footer/>
    </div>
  );
}

export default App;
