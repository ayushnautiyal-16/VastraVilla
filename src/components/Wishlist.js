import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Designer Wedding Lehenga",
            category: "Bridal Wear",
            price: 2500,
            duration: "3 days",
            image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=600&fit=crop",
            occasion: "Wedding",
            inStock: true
        },
        {
            id: 2,
            name: "Royal Sherwani",
            category: "Groom Wear",
            price: 1800,
            duration: "3 days",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=600&fit=crop",
            occasion: "Wedding",
            inStock: true
        },
        {
            id: 3,
            name: "Party Gown",
            category: "Evening Wear",
            price: 1200,
            duration: "1 day",
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop",
            occasion: "Party",
            inStock: false
        },
        {
            id: 4,
            name: "Traditional Saree",
            category: "Ethnic Wear",
            price: 800,
            duration: "2 days",
            image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop",
            occasion: "Festival",
            inStock: true
        }
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Wishlist</h1>
                    <p className="text-gray-600">Items you've saved for later ({wishlistItems.length} items)</p>
                </div>

                {wishlistItems.length === 0 ? (
                    /* Empty Wishlist */
                    <div className="bg-white rounded-2xl p-16 text-center">
                        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
                        <p className="text-gray-600 mb-8">Start adding items you love to your wishlist</p>
                        <Link to="/">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
                                Browse Collection
                            </button>
                        </Link>
                    </div>
                ) : (
                    /* Wishlist Items */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all group"
                            >
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
                                    
                                    {/* Stock Badge */}
                                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${item.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                                    </div>

                                    {/* Occasion Badge */}
                                    <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {item.occasion}
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all group/btn"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                    </button>
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
                                    <button 
                                        className={`w-full py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                                            item.inStock 
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                        disabled={!item.inStock}
                                    >
                                        {item.inStock ? (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Rent Now
                                            </>
                                        ) : (
                                            'Out of Stock'
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Continue Shopping */}
                {wishlistItems.length > 0 && (
                    <div className="mt-8 text-center">
                        <Link to="/">
                            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
