import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Only set up auth listener if auth is available
        if (!auth) {
            console.log("Auth not initialized - running in demo mode");
            // Demo mode - user ko null rakhenge to Login button dikhega
            setUser(null);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        if (!auth) {
            console.log("Auth not available");
            return;
        }
        signOut(auth).then(() => {
            setUser(null);
            navigate('/');
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    // Check if current route is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 w-full border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 no-underline group">
                            <img 
                                src="/logo.png" 
                                alt="VastraVilla" 
                                className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                VastraVilla
                            </span>
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2.5 pr-12 text-sm border-2 border-gray-200 rounded-full outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                                    placeholder="Search for wedding wear, party outfits, designer clothes..."
                                />
                                <button 
                                    type="submit"
                                    className="absolute right-2 p-2 text-gray-400 hover:text-purple-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {/* Home Link */}
                        <Link 
                            to="/" 
                            className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all ${
                                isActive('/') 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Home
                        </Link>

                        {/* About Us */}
                        <Link 
                            to="/about" 
                            className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all ${
                                isActive('/about') 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            About Us
                        </Link>

                        {/* Contact Us */}
                        <Link 
                            to="/contact" 
                            className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all ${
                                isActive('/contact') 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Contact Us
                        </Link>

                        {/* Become a Seller */}
                        <Link 
                            to="/seller" 
                            className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all flex items-center gap-2 ${
                                isActive('/seller') 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Sell Clothes</span>
                        </Link>

                        {/* Cart Icon */}
                        <Link to="/cart" className="relative group">
                            <button className={`p-2.5 rounded-lg transition-all ${
                                isActive('/cart') 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Cart {cartCount > 0 && `(${cartCount})`}
                            </span>
                        </Link>

                        {/* Login/User Button */}
                        {!user ? (
                            <div
                                className="relative"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <Link to="/login">
                                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg transition-all flex items-center gap-2 transform hover:scale-105">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        <span>Login</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </Link>

                                {/* Dropdown Menu - Preview for non-logged users */}
                                {showDropdown && (
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 z-50">
                                        {/* Header */}
                                        <div className="px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                            <div className="text-center">
                                                <p className="text-sm font-semibold mb-1">Login to Access</p>
                                                <p className="text-xs opacity-90">Unlock exclusive features</p>
                                            </div>
                                        </div>

                                        {/* Menu Items - Preview */}
                                        <div className="py-2">
                                            <Link
                                                to="/profile"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="text-sm font-medium">My Profile</span>
                                            </Link>

                                            <Link
                                                to="/orders"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                                <span className="text-sm font-medium">My Orders</span>
                                            </Link>

                                            <Link
                                                to="/wishlist"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="text-sm font-medium">Wishlist</span>
                                            </Link>

                                            <Link
                                                to="/rentals"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                                <span className="text-sm font-medium">My Rentals</span>
                                            </Link>

                                            <Link
                                                to="/rewards"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                </svg>
                                                <span className="text-sm font-medium">Rewards</span>
                                            </Link>

                                            <Link
                                                to="/notifications"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                </svg>
                                                <span className="text-sm font-medium">Notifications</span>
                                            </Link>
                                        </div>

                                        {/* Login CTA */}
                                        <div className="border-t border-gray-100 p-3">
                                            <p className="text-xs text-gray-500 text-center mb-2">Login for full access</p>
                                            <Link to="/login">
                                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                                                    Login Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div
                                className="relative"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg transition-all flex items-center gap-2 transform hover:scale-105">
                                    <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <span className="max-w-[100px] truncate">{user.displayName || 'User'}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {showDropdown && (
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 z-50">
                                        {/* User Info Header */}
                                        <div className="px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold truncate">{user.displayName || 'User'}</p>
                                                    <p className="text-xs opacity-90 truncate">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu Items */}
                                        <div className="py-2">
                                            <Link
                                                to="/profile"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="text-sm font-medium">My Profile</span>
                                            </Link>

                                            <Link
                                                to="/orders"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                                <span className="text-sm font-medium">My Orders</span>
                                            </Link>

                                            <Link
                                                to="/wishlist"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="text-sm font-medium">Wishlist</span>
                                            </Link>

                                            <Link
                                                to="/rentals"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                                <span className="text-sm font-medium">My Rentals</span>
                                            </Link>

                                            <Link
                                                to="/rewards"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                </svg>
                                                <span className="text-sm font-medium">Rewards</span>
                                            </Link>

                                            <Link
                                                to="/notifications"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 no-underline text-gray-700 hover:text-purple-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                </svg>
                                                <span className="text-sm font-medium">Notifications</span>
                                            </Link>
                                        </div>

                                        {/* Logout */}
                                        <div className="border-t border-gray-100">
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 w-full text-left text-gray-700 hover:text-red-600 transition-all group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <span className="text-sm font-medium">Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <Link to="/cart" className="relative">
                            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </Link>
                        
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {showMobileMenu && (
                    <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="px-2 pb-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 pr-10 text-sm border-2 border-gray-200 rounded-lg outline-none focus:border-purple-500"
                                    placeholder="Search clothes..."
                                />
                                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        <Link to="/" className={`block px-4 py-2 rounded-lg no-underline ${isActive('/') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
                            Home
                        </Link>
                        <Link to="/about" className={`block px-4 py-2 rounded-lg no-underline ${isActive('/about') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
                            About Us
                        </Link>
                        <Link to="/contact" className={`block px-4 py-2 rounded-lg no-underline ${isActive('/contact') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
                            Contact Us
                        </Link>
                        <Link to="/seller" className={`block px-4 py-2 rounded-lg no-underline ${isActive('/seller') ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
                            Become a Seller
                        </Link>
                        
                        {!user ? (
                            <Link to="/login" className="block px-4 py-2">
                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2.5 rounded-lg font-semibold">
                                    Login
                                </button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                                    My Profile
                                </Link>
                                <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                                    My Orders
                                </Link>
                                <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                                    Wishlist
                                </Link>
                                <Link to="/rentals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                                    My Rentals
                                </Link>
                                <Link to="/rewards" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg no-underline">
                                    Rewards
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
