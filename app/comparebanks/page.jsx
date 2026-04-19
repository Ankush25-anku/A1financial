import React from "react";
import CompareBanks from "../../components/CompareBanks";
import Servicesdetailsheader from "../../components/Servicesdetailsheader";
import Comparebanks1 from "../../components/Comparebanks1";
import QuickComparison from "../../components/QuickComparison";
import WhyApply from "../../components/WhyApply";
import FAQ1 from "../../components/FAQ1";
import CTASection1 from "../../components/CTASection1";

const page = () => {
  return (
    <div>
      <Servicesdetailsheader />
      <CompareBanks />
      <Comparebanks1 />
      <QuickComparison />

      <WhyApply />
      <FAQ1 />
      <CTASection1 />
    </div>
  );
};

export default page;
