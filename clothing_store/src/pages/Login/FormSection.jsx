import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../componets/CommonUtilities/InputFields/InputField';
import SubmitButton from '../../componets/CommonUtilities/Button/Button'; 
import { useNavigate } from 'react-router-dom';

function FormSection() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/Home');
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <InputField
          id="username"
          label="Username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your username"
          error={formik.touched.username && formik.errors.username}
        />

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-sm text-red-600">{formik.errors.password}</div>
          )}
        </div>

        <SubmitButton label="Login" />
      </form>
    </div>
  );
}

export default FormSection;
