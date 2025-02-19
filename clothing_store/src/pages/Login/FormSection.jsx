import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../componets/CommonUtilities/InputFields/InputField';
import SubmitButton from '../../componets/CommonUtilities/Button/Button'; 
import { useNavigate } from 'react-router-dom';
import Button from '../../componets/CommonUtilities/Button/Button';
import {  FaRegEye } from 'react-icons/fa';

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
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <InputField
      labelClassName="block text-sm font-medium text-gray-100 mb-3"
        id="username"
        label="Username"
        type="text"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your username"
        error={formik.touched.username && formik.errors.username}
        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />

      <InputField
      labelClassName="block text-sm font-medium text-gray-100 mb-3"
        id="password"
        label="Password"
        type={passwordVisible ? 'text' : 'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your password"
        error={formik.touched.password && formik.errors.password}
        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm relative"
      >
        <Button
        label={passwordVisible ? <FaRegEye className="text-xl " /> : <FaRegEye className="text-xl " />}
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute inset-y-14 right-0 flex items-center pr-3  text-gray-600 focus:outline-none"
        />
          
        
      </InputField>

      <SubmitButton label="Login" className="w-full mt-6 bg-blue-800 text-white py-2 rounded-lg hover:bg-indigo-700 transition" />
    </form>
  );
}

export default FormSection;