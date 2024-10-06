import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx"
import Herosection from "../components/Mainsection/Herosection.jsx"
import UserFriendly from "../components/UserFriendly/UserFriendly";
import Testimonial from "../components/Testimonial/Testimonial";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import PayOption from "../components/Payment/PayOption.jsx";

const Home = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-purple-200 via-orange-100 to-gray-200 flex justify-center items-center">
      {/* Main container with fixed width and height and vertical scrolling */}
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-full overflow-y-auto flex flex-col justify-start items-center mx-5 my-5 px-5 py-5">
      <PayOption/>
      <UserFriendly/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;