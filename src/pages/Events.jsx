import React from "react";
import Hero from "../components/Events/Hero";
import PaginatedCards from "../components/Events/PaginatedCards";
import TransparentHeader from "../components/Shared/TransparentHeader";

function Events() {
  return (
    <div>
      {/* <TransparentHeader /> */}
      <Hero />
      <PaginatedCards />
    </div>
  );
}

export default Events;
