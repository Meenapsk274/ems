import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import Footer from "./global-components/footer";
import ResendActivation from "./shop-components/ResendActivation";

const ResendVerificationPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar/>
      <PageHeader headertitle="Login" />
      <ResendActivation id={id} />
      <Footer />
    </div>
  );
};

export default ResendVerificationPage;
