import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-10 py-20 bg-yellow-100 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-extrabold font-serif text-indigo-400 mb-4">Our Menu</h1>
      <ul className="text-lg list-inside text-gray-600 mb-8">
        <li className="mb-2">Taro Egg Tart – $3.50</li>
        <li className="mb-2">Box (4 pcs) – $10.00</li>
      </ul>
      
      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-300 hover:bg-indigo-400 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Home
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="bg-yellow-300 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Menu;
