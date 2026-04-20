import React from "react";

import ContactHeader from "../../components/ContactHeader";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";

const page = () => {
  return (
    <div>
      <ContactHeader />
      <ContactSection />
      <MapSection />
    </div>
  );
};

export default page;
