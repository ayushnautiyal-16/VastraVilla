import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const clothingItems = [
        {
            id: 1,
            name: "Designer Wedding Lehenga",
            category: "Bridal Wear",
            price: 2500,
            duration: "3 days",
            image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=600&fit=crop",
            description: "Stunning red and gold embroidered lehenga perfect for weddings",
            occasion: "Wedding"
        },
        {
            id: 2,
            name: "Royal Sherwani",
            category: "Groom Wear",
            price: 1800,
            duration: "3 days",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=600&fit=crop",
            description: "Premium ivory sherwani with golden embroidery for grooms",
            occasion: "Wedding"
        },
        {
            id: 3,
            name: "Party Gown",
            category: "Evening Wear",
            price: 1200,
            duration: "1 day",
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop",
            description: "Elegant black party gown with sequin work",
            occasion: "Party"
        },
        {
            id: 4,
            name: "Traditional Saree",
            category: "Ethnic Wear",
            price: 800,
            duration: "2 days",
            image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop",
            description: "Beautiful silk saree with traditional motifs",
            occasion: "Festival"
        },
        {
            id: 5,
            name: "Cocktail Dress",
            category: "Party Wear",
            price: 1500,
            duration: "1 day",
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
            description: "Stylish cocktail dress for evening parties",
            occasion: "Party"
        },
        {
            id: 6,
            name: "Indo-Western Outfit",
            category: "Fusion Wear",
            price: 1000,
            duration: "2 days",
            image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&h=600&fit=crop",
            description: "Modern indo-western ensemble for festive occasions",
            occasion: "Festival"
        },
        {
            id: 7,
            name: "Anarkali Suit",
            category: "Traditional",
            price: 900,
            duration: "2 days",
            image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=600&fit=crop",
            description: "Gorgeous anarkali suit with mirror work",
            occasion: "Wedding"
        },
        {
            id: 8,
            name: "Formal Blazer Set",
            category: "Formal Wear",
            price: 700,
            duration: "1 day",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
            description: "Premium formal blazer with trousers",
            occasion: "Corporate"
        }
    ];

    return (
        <div className="animate-slide-up bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-20 px-4 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

                {/* Large Floating Icons - ShareBite Style */}
                <div className="absolute top-20 left-10 opacity-30 animate-float-large">
                    <div className="w-32 h-32 bg-white/20 rounded-2xl backdrop-blur-sm shadow-2xl p-4 transform rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute top-40 right-20 opacity-25 animate-float-slow" style={{ animationDelay: '1s' }}>
                    <div className="w-28 h-28 bg-white/20 rounded-full backdrop-blur-sm shadow-2xl p-5 transform -rotate-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute bottom-32 left-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="w-36 h-36 bg-white/15 rounded-3xl backdrop-blur-sm shadow-2xl p-6 transform rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute top-1/2 right-10 opacity-30 animate-float-large" style={{ animationDelay: '3s' }}>
                    <div className="w-24 h-24 bg-white/25 rounded-xl backdrop-blur-sm shadow-2xl p-4 transform -rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute bottom-20 right-1/3 opacity-25 animate-float-slow" style={{ animationDelay: '4s' }}>
                    <div className="w-32 h-32 bg-white/20 rounded-2xl backdrop-blur-sm shadow-2xl p-5 transform rotate-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Share Fashion,
                                <br />
                                <span className="text-yellow-300">Save Money</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                                Rent designer clothes for weddings, parties & special occasions.
                                Join our sustainable fashion community and look amazing without breaking the bank!
                            </p>

                            <div className="flex gap-4 flex-wrap mb-12">
                                <button className="bg-yellow-400 text-gray-900 px-8 py-3.5 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Browse Clothes
                                </button>
                                <Link to="/seller">
                                    <button className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        List Your Clothes
                                    </button>
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">500+</div>
                                    <div className="text-sm md:text-base opacity-90">Clothes Listed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">200+</div>
                                    <div className="text-sm md:text-base opacity-90">Happy Renters</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">50+</div>
                                    <div className="text-sm md:text-base opacity-90">Active Sellers</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Floating Cards */}
                        <div className="relative hidden md:block">
                            <div className="relative w-[500px] h-[500px] mx-auto">
                                {/* Center Circle */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-80 h-80 bg-white/20 backdrop-blur-lg rounded-full border-4 border-white/30 flex items-center justify-center shadow-2xl">
                                        {/* Center Content */}
                                        <div className="text-center relative z-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-300 mx-auto mb-3 animate-float-y drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            <p className="text-3xl font-bold mb-1 drop-shadow-md">Sustainable</p>
                                            <p className="text-xl opacity-90 drop-shadow-md">Fashion</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Tags - Better positioned */}
                                <div className="absolute top-4 left-2 bg-white text-purple-600 px-5 py-2.5 rounded-full shadow-xl font-semibold text-sm animate-float flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    Wedding Wear
                                </div>
                                <div className="absolute top-16 right-4 bg-white text-purple-600 px-5 py-2.5 rounded-full shadow-xl font-semibold text-sm animate-float-slow flex items-center gap-2">
                                    <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
                                    Party Outfits
                                </div>
                                <div className="absolute bottom-16 left-4 bg-white text-purple-600 px-5 py-2.5 rounded-full shadow-xl font-semibold text-sm animate-float flex items-center gap-2">
                                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                    Designer Clothes
                                </div>
                                <div className="absolute bottom-4 right-8 bg-white text-purple-600 px-5 py-2.5 rounded-full shadow-xl font-semibold text-sm animate-float-slow flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                    Ethnic Wear
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Arrow */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

            {/* Clothing Cards Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular Rentals</h2>
                    <p className="text-gray-600">Discover our trending collection for weddings, parties & events</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {clothingItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
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
                    ))}
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How VastraVilla Works</h2>
                        <p className="text-lg text-gray-600">Simple steps to rent your dream outfit</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-2xl font-bold">1</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Browse & Select</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Explore our wide collection of designer clothes. Filter by occasion, size, and style to find your perfect outfit.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-6 hidden md:block">
                                <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-2xl font-bold">2</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Book & Pay</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Select your rental dates and make secure payment. Get instant confirmation and tracking details.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-6 hidden md:block">
                                <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-2xl font-bold">3</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Wear & Shine</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Receive your outfit at your doorstep. Rock your event and return it hassle-free after use.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose VastraVilla?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
                            <p className="text-gray-600">Rent designer clothes at fraction of retail price</p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainable Fashion</h3>
                            <p className="text-gray-600">Reduce waste by sharing and reusing clothes</p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                            <p className="text-gray-600">All items verified for quality and cleanliness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
