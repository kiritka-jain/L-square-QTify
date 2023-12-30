import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [searchData,setSearchdata] = useState();
  return (
    <>
    <Navbar searchData={searchData}/>
    </>
  );
}

export default App;
