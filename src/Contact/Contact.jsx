import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/contact us/ContactUs";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
      <ContactUs/>
      </div>
      <Footer />
    </>
  );
}
export default Courses;
