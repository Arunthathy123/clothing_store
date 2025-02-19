import React from 'react';
import FormSection from './FormSection';

function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-full max-w-4xl border border-gray-900">
        <div className="w-1/2 p-8">
          <FormSection />
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
          {/* You can optionally add a dark overlay here */}
        </div>
      </div>
    </div>
  );
}

export default Login;

