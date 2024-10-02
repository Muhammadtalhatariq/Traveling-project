import React from "react";
import Hero from "@/app/components/Home/page";
import Experience from "@/app/components/Experience/page";
import Explore from "@/app/components/Explore/page"
import Contact from "@/app/components/Contact/page"
const page = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Explore/>
      <Contact/>
    </div>
  );
};

export default page;
