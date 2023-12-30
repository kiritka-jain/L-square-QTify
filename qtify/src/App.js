import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  const [searchData,setSearchdata] = useState();
  return (
    <>
    <Navbar searchData={searchData}/>
    <Hero/>
    </>
  );
}

export default App;
