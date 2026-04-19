import React from "react";
import Servicesheader from "../../components/Servicesheader";
import AboutHeader from "../../components/AboutHeader";
import StorySection from "../../components/StorySection";
import About from "../../components/About";
import Roadmap from "../../components/Roadmap";
import Team from "../../components/Team";
import CTASection from "../../components/CTASection";
const page = () => {
  return (
    <div>
      <Servicesheader />
      <AboutHeader />
      <StorySection />
      <About />
      <Roadmap />
      <Team />
      <CTASection />
    </div>
  );
};

export default page;
