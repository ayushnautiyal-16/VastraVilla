import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartCount, setCartCount] = useState(0); // Cart is empty initially

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 w-full border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 gap-5">
                {/* Logo */}
                <Link to="/" className="flex items-center no-underline">
                    <img src="/logo.png" alt="VastraVilla" className="h-32" />
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-lg flex bg-gray-100 rounded-lg shadow-sm overflow-hidden border border-gray-300">
                    <input
                        type="text"
                        className="flex-1 border-none px-4 py-2.5 text-sm outline-none placeholder-gray-500 bg-gray-100"
                        placeholder="Search for clothes, occasions, events..."
                    />
                    <button className="bg-gray-100 border-none px-4 cursor-pointer hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/seller" className="text-gray-700 no-underline text-sm font-medium whitespace-nowrap px-3 py-2 rounded hover:bg-gray-100 transition-all flex items-center gap-2">
                        <span>Become a Seller</span>
                    </Link>
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className="relative group">
                    <div className="text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Cart
                    </span>
                </Link>
                {/* Login Button with Dropdown */}
                <div
                    className="flex items-center relative"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <button className="bg-blue-600 text-white px-8 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all whitespace-nowrap flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Login</span>
                        <span className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {/* Dropdown Menu */}
                    {showDropdown && (
                        <div className="absolute top-full right-0 pt-2 w-56">
                            <div className="bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in">
                                <div className="py-2">
                                    {/* New Customer */}
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-xs text-gray-600 mb-1">New Customer?</p>
                                        <Link
                                            to="/signup"
                                            className="text-blue-600 font-semibold text-sm hover:text-blue-700 no-underline"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>

                                    {/* Menu Items */}
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 no-underline text-gray-800 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="text-sm">My Profile</span>
                                    </Link>

                                    <Link
                                        to="/orders"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 no-underline text-gray-800 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <span className="text-sm">Orders</span>
                                    </Link>

                                    <Link
                                        to="/wishlist"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 no-underline text-gray-800 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span className="text-sm">Wishlist</span>
                                    </Link>

                                    <Link
                                        to="/rentals"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 no-underline text-gray-800 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="text-sm">My Rentals</span>
                                    </Link>

                                    <Link
                                        to="/notifications"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 no-underline text-gray-800 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="text-sm">Notifications</span>
                                    </Link>

                                    <div className="border-t border-gray-100 mt-1">
                                        <button
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 w-full text-left text-gray-800 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span className="text-sm">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
