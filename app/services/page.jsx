import React from "react";
import PageHeaderservices from "../../components/PageHeaderservices";
import Servicesheader from "../../components/Servicesheader";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import CTASection from "../../components/CTASection";
import TestimonialSectionservices from "../../components/TestimonialSectionservices";
const page = () => {
  return (
    <div>
      <Servicesheader />
      <PageHeaderservices />
      <Service />
      <TestimonialSectionservices />
      <CTASection />
      
    </div>
  );
};

export default page;
