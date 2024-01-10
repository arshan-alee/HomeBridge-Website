import React from "react";
import Hero from "../components/F2R/Hero";
import Advantages from "../components/F2R/Advantages";
import Visa from "../components/F2R/Visa";
import QualificationRequirements from "../components/F2R/QualificationRequirements";
import NeedHelp from "../components/F2R/NeedHelp";
import Footer from "../components/Shared/Footer";

const F2R = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <Visa />
      <QualificationRequirements />
      <NeedHelp />
      <Footer />
    </div>
  );
};

export default F2R;
