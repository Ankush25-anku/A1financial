import React from "react";
import PageHeaderservices from "../../components/PageHeaderservices";
import Servicesheader from "../../components/Servicesheader";
import Service from "../../components/Service";
// import Testimonial from "../../components/Testimonial";
// import CTASection from "../../components/CTASection";

const page = () => {
  return (
    <div>
      <PageHeaderservices />
      <Service />
      {/* <Testimonial />
      <CTASection /> */}
    </div>
  );
};

export default page;
