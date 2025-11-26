import React from 'react';
import { Link } from 'react-router-dom';

const ClothingCard = ({ item }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/500x600?text=VastraVilla";
                    }}
                />
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.occasion}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{item.description}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <div>
                        <span className="text-2xl font-bold text-purple-600">₹{item.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/ {item.duration}</span>
                    </div>
                </div>

                {/* Rent Now Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Rent Now
                </button>
            </div>
        </div>
    );
};

export default ClothingCard;
