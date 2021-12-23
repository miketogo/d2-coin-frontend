import React from "react";
// import Banner from "../Banner/Banner";
import AboutCoin from "./AboutCoin/AboutCoin";
import Advantages from "./Advantages/Advantages";
import Gia from "./Gia/Gia";
import Graph from "./Graph/Graph";
import HowItWorks from "./HowItWorks/HowItWorks";


import './Main.css';
import MainHeading from "./MainHeading/MainHeading";
// import Overview from "./Overview/Overview";
// import UseCases from "./UseCases/UseCases";



function Main() {


  return (
    <div className="main">
      <MainHeading />
      <AboutCoin />
      <Advantages />
      <Graph />
      <HowItWorks />
      <Gia />
      {/* <Overview />
      <Banner />
      <Graph />
      <Gia />
      <HowItWorks />
      <UseCases /> */}
    </div>
  );
}

export default Main;
