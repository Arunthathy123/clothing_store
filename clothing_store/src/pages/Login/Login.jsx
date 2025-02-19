import React from 'react';
import FormSection from './FormSection';

function Login() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Image/banner/LoginBanner.png")' }}>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-md p-8 rounded-lg shadow-lg backdrop-blur-md bg-black bg-opacity-40 border border-gray-700">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">Login</h2>
        <FormSection />
      </div>
    </div>
  );
}

export default Login;
