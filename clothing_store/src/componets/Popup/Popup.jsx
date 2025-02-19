import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import InputField from "../InputFields/InputField";
import Button from "../Button/Button";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="">
          <div className="h-screen w-full fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-blue-900">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-white">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer text-white"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4 flex flex-col gap-3">
                <InputField
                  type="text"
                  placeholder="Name"
                  className=" w-full rounded-full border border-gray-300 bg-gray-300 focus:outline-none px-2 py-1 mb-4"
                />
                <InputField
                  type="email"
                  placeholder="Email"
                  className=" w-full rounded-full border border-gray-300 bg-gray-300 focus:outline-none px-2 py-1 mb-4"
                />
                <InputField
                  type="text"
                  placeholder="Address"
                  className=" w-full rounded-full border border-gray-300 bg-gray-300 focus:outline-none px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <Button label="Order Now" className="bg-gradient-to-r from-primary to-secondary  border-2  hover:scale-105 duration-200 text-white py-1 px-4 rounded-full " />
                    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
