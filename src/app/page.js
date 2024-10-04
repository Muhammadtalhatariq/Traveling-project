import React from "react";
import Hero from "@/app/components/Home/page";
import Experience from "@/app/components/Experience/page";
import Explore from "@/app/components/Explore/page"
import Contact from "@/app/components/Contact/page"
import OurTeam from '@/app/components/Ourteam/page'
import Services from '@/app/components/Services/page'
import Airlines from '@/app/components/Airlines/page'
import Footer from '@/app/components/Footer/page'
const page = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Explore/>
      <OurTeam/>
      <Contact/>
      <Services/>
      <Airlines/>
      <Footer/>
    </div>
  );
};

export default page;
