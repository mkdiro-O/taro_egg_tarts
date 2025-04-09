import React from 'react';
import { useNavigate } from 'react-router-dom';
import taroEggTart from '/Users/bluesky/Desktop/taro_egg_tarts/src/assets/taro-egg-tart.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-between px-10 py-20 bg-yellow-100 min-h-screen">
      {/* Left side: Text and Buttons */}
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl font-extrabold font-serif text-indigo-400 mb-4">Handmade with Heart</h1>
        <h2 className="text-3xl font-semibold font-serif text-indigo-300 mb-6">Fresh Taro Egg Tarts</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our tarts are baked fresh daily using real taro and a buttery, flaky crust.
          Inspired by Asian flavors, loved by everyone.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/menu')}
            className="bg-indigo-300 hover:bg-indigo-400 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            View Menu
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-yellow-300 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 flex justify-end">
        <img
          src={taroEggTart}
          alt="Taro Egg Tart"
          className="w-720 h-600 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
