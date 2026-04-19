import React from "react";
import Servicesdetailspage from "../../components/Servicedetailspage";
import Servicesdetailsheader from "../../components/Servicesdetailsheader";
import Servicedetails from "../../components/Servicedetails";

const page = () => {
  return (
    <div>
      <Servicesdetailsheader />
      <Servicesdetailspage />
      <Servicedetails />
    </div>
  );
};

export default page;
