import React from "react";
import NavBar from "./router/navbar";
import Home from "./pages/home/home"
import About from "./pages/about/about";

function App() {
   return(
      <>
    <NavBar />
    <Home />
    <About />
    </>
   ); 
}
export default App;