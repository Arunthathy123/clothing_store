

import React from "react";
import Banner from "/Image/banner/notifybanner.jpg";
import InputFeild from "../InputFields/InputField"
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Notified = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800  "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center text-white sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <InputFeild
          
            // data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 mt-1 block focus:outline-none px-4 py-2 border border-gray-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default Notified;
