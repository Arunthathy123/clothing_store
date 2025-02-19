import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import InputField from '../InputFields/InputField';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const handleOrderSubmit = () => {
    Swal.fire({
      title: 'Order Placed Successfully!',
      text: 'Thank you for your order. We will contact you soon.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    setOrderPopup(false);
  };

  return (
    orderPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-800">Order Now</h1>
            <IoCloseOutline
              className="text-3xl text-gray-600 cursor-pointer hover:text-gray-800"
              onClick={() => setOrderPopup(false)}
            />
          </div>

          {/* Image from Freepik (replace with an actual image URL from Freepik) */}
          <div className="mb-4">
            <img
              src="https://img.freepik.com/free-vector/flat-design-food-ordering-app_23-2148528721.jpg" // Replace with your preferred Freepik image URL
              alt="Order Illustration"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <InputField type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-full" />
            <InputField type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-full" />
            <InputField type="text" placeholder="Address" className="w-full px-4 py-2 border rounded-full" />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <Button
              label="Order Now"
              className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-200"
              onClick={handleOrderSubmit}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
