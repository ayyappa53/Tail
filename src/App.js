import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newletter from "./components/Newletter";
import Card from "./components/Card";
import Fotter from "./components/Fotter";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics/>
      <Newletter/>
      <Card/>
      <Fotter/>
    </div>
  );
}

export default App;
