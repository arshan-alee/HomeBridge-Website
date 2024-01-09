import React from "react";
import Hero from "../components/Home/Hero";
import Partnership from "../components/Home/Partnership";
import WhoWeAre from "../components/Home/WhoWeAre";
import Opportunity from "../components/Home/Opportunity";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import Question from "../components/Home/Question";
import Footer from "../components/Shared/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <WhoWeAre />
      <Opportunity />
      <Services />
      <Testimonials />
      <Question />
      <Footer />
    </div>
  );
};

export default Home;
