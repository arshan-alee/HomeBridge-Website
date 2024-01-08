import React from "react";
import Hero from "../components/Home/Hero";
import Partnership from "../components/Home/Partnership";
import WhoWeAre from "../components/Home/WhoWeAre";
import Opportunity from "../components/Home/Opportunity";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <WhoWeAre />
      <Opportunity />
      <Services />
    </div>
  );
};

export default Home;
