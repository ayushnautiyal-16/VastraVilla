import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateDays = (id, newDays) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, days: Math.max(1, newDays) } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.days), 0);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
                    <p className="text-gray-600">{cartItems.length} items in your cart</p>
                </div>

                {cartItems.length === 0 ? (
                    // Empty Cart
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
                        <p className="text-gray-600 mb-6">Add some clothes to rent!</p>
                        <Link
                            to="/"
                            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors no-underline"
                        >
                            Browse Clothes
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex gap-6">
                                    {/* Image */}
                                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg w-24 h-24 flex items-center justify-center text-5xl flex-shrink-0">
                                        {item.image}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{item.category} • Size: {item.size}</p>
                                        <p className="text-purple-600 font-semibold">₹{item.price}/day</p>

                                        {/* Days Selector */}
                                        <div className="flex items-center gap-3 mt-4">
                                            <span className="text-sm text-gray-600">Rental Days:</span>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateDays(item.id, item.days - 1)}
                                                    className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center font-semibold transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-12 text-center font-semibold">{item.days}</span>
                                                <button
                                                    onClick={() => updateDays(item.id, item.days + 1)}
                                                    className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center font-semibold transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price and Remove */}
                                    <div className="text-right flex flex-col justify-between">
                                        <div>
                                            <p className="text-xl font-bold text-gray-800">₹{item.price * item.days}</p>
                                            <p className="text-sm text-gray-500">for {item.days} days</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{calculateTotal()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Security Deposit</span>
                                        <span>₹{Math.round(calculateTotal() * 0.2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Delivery</span>
                                        <span className="text-green-600">FREE</span>
                                    </div>
                                    <div className="border-t pt-3 mt-3">
                                        <div className="flex justify-between text-lg font-bold text-gray-800">
                                            <span>Total</span>
                                            <span>₹{calculateTotal() + Math.round(calculateTotal() * 0.2)}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Deposit will be refunded after return</p>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all mb-3">
                                    Proceed to Checkout
                                </button>

                                <Link
                                    to="/"
                                    className="block text-center text-purple-600 hover:text-purple-700 font-medium text-sm no-underline"
                                >
                                    Continue Shopping
                                </Link>

                                {/* Benefits */}
                                <div className="mt-6 pt-6 border-t space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>100% Quality Assured</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                        </svg>
                                        <span>Free Delivery & Return</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Secure Payments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
