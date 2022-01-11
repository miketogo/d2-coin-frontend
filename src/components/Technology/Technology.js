import React from "react";
// import Banner from "../Banner/Banner";
// import Algorithm from "./Algorithm/Algorithm";
// import BankStorage from "./BankStorage/BankStorage";
import Heading from "./Heading/Heading";
import Network from "./Network/Network";
import Scheme from "./Scheme/Scheme";


import './Technology.css';




function Technology() {


  return (
    <div className="technology">
      <Heading />
      <Network />
      <Scheme />
      {/* <Algorithm />
      <BankStorage />
      <Banner /> */}
    </div>
  );
}

export default Technology;
