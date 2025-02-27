import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';
import InputField from '../../CommonUtilities/InputFields/InputField';
import Button from '../../CommonUtilities/Button/Button';
import TextArea from '../../CommonUtilities/InputFields/TextArea';

const ContactInfo = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactCards = [
    { id: 1, title: 'Email Us', description: 'vmaxocompany@gmail.com', icon: <FaEnvelope className="text-[#b2924c] text-2xl" /> },
    { id: 2, title: 'Call Us', description: '9061093399, 9061613998', icon: <FaPhoneAlt className="text-[#b2924c] text-2xl" /> },
    { id: 3, title: 'Visit Us', description: 'FAHIN ARCADE, Broadway, Ernakulam, kochi - 682031 Kerala, India', icon: <FaMapMarkerAlt className="text-[#b2924c] text-2xl" /> },
    { id: 4, title: 'Support', description: 'vmaxocompany@gmail.com ', icon: <FaHeadset className="text-[#b2924c] text-2xl" /> },
  ];

  const initialValues = { name: '', email: '', message: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    setFormSubmitted(true);
    resetForm();
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const location = "X7QP+XF Kochi, Kerala";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(location)}`;

  // const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=GWJH%2BQC+Thiruvananthapuram,+Kerala/`;

  return (
    <div className="mx-auto px-6 lg:px-32 py-10">
      <div className="text-center mb-20">
        <h3 className="text-3xl font-semibold text-gray-800">Get In Touch</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {contactCards.map((card, index) => (
          <div
            key={card.id}
            className={`p-6 rounded-lg shadow-md flex flex-col items-center ${index % 2 !== 0 ? 'bg-blue-950 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            <div className="mb-4">{card.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-64 lg:h-96 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src={mapSrc}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          {formSubmitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              Thank you! Your message has been sent.
            </div>
          )}

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form className="space-y-4">
                <InputField
                  id="name"
                  label="Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  error={touched.name && errors.name}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  error={touched.email && errors.email}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <TextArea
                  id="message"
                  label="Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  error={touched.message && errors.message}
                />
                <Button label="Send Message" className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
