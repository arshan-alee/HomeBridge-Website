import React from "react";
import Hero from "../components/Home/Hero";
import Partnership from "../components/Home/Partnership";
import WhoWeAre from "../components/Home/WhoWeAre";
import Opportunity from "../components/Home/Opportunity";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <WhoWeAre />
      <Opportunity/>
    </div>
  );
};

export default Home;
