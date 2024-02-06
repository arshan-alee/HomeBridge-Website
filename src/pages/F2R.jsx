import React from "react";
import Hero from "../components/F2R/Hero";
import Advantages from "../components/F2R/Advantages";
import Visa from "../components/F2R/Visa";
import QualificationRequirements from "../components/F2R/QualificationRequirements";
import NeedHelp from "../components/F2R/NeedHelp";
import TransparentHeader from "../components/Shared/TransparentHeader";

const F2R = () => {
  return (
    <div>
      {/* <TransparentHeader /> */}
      <Hero />
      <Advantages />
      <Visa />
      <QualificationRequirements />
      <NeedHelp />
    </div>
  );
};

export default F2R;
