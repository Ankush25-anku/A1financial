"use client";

import React, { useState } from "react";
import Servicesdetailsheader from "../../components/Servicesdetailsheader";
import EMIHero from "../../components/EMIHero";
import EMIContent from "../../components/EMIContent";

const Page = () => {
  const [activeTab, setActiveTab] = useState("emi");

  return (
    <div>
      <Servicesdetailsheader />

      {/* PASS BOTH props */}
      <EMIHero activeTab={activeTab} onTabChange={setActiveTab} />

      <EMIContent activeTab={activeTab} />
    </div>
  );
};

export default Page;
