import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Contact"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />

      <ContactInfo />

      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
