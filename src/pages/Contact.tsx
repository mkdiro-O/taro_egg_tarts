import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-10 py-20 bg-yellow-100 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-extrabold font-serif text-indigo-400 mb-4">Contact Us</h1>
      
      {/* Contact Info */}
      <p className="text-lg text-gray-600 mb-4">Email: hello@taroeggtarts.com</p>
      <p className="text-lg text-gray-600 mb-8">WeChat: taroeggtarts</p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-300 hover:bg-indigo-400 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
