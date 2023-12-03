import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import Footer from "../components/Layouts/Footer";
import OurValues from "../components/HomeOne/OurValues";
import WorkingProcess from "../components/HomeOne/WorkingProcess";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />
      {/* <AboutUsContent /> */}
      {/* <WorkingProcess /> */}
      <div className="pt-100">
        {/* <OurValues /> */}
      </div>
      {/* <TeamMember /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
