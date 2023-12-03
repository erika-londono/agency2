import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import OurServices from "../components/HomeOne/OurServices";
import AboutUs from "../components/HomeOne/AboutUs";
import FunFacts from "../components/Common/FunFacts";
import WorkingProcess from "../components/HomeOne/WorkingProcess";
import FeaturedService from "../components/HomeOne/FeaturedService";
import Testimonial from "../components/Common/Testimonial";
import SolutionsTab from "../components/Common/SolutionsTab";
import GetStartedProject from "../components/Common/GetStartedProject";
import BlogPost from "../components/Common/BlogPost";
import Customers from "../components/Common/Customers";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import Slider from "../components/HomeOne/Slider";
import TeamMember from "../components/Common/TeamMember";
const Index = () => {
  return (
    <>
        <Navbar />
        <Slider />
      {/* <OurServices /> */}
      <TeamMember />
      {/* <AboutUs /> */}


      {/* <div className="pb-100">
        <FeaturedService />
      </div> */}

      {/* <Testimonial /> */}
      {/* <div className="pb-100">
        <GetStartedProject />
      </div> */}

      {/* <BlogPost /> */}

      {/* <Customers /> */}
      {/* <SolutionsTab /> */}

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
};

export default Index;
