import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClothingList from './ClothingList';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Rent from Real People, Not Stores!",
            subtitle: "India's first P2P clothing rental • Borrow designer outfits from people near you",
            discount: "PEER-TO-PEER",
            image: "/slide1.jpg",
            bgColor: "from-blue-500 to-purple-600",
            buttonText: "Start Renting Now",
            features: ["👥 Rent from Real Users", "🔒 Security Deposit Protected", "📍 Local Pickups"],
            useBackgroundImage: true
        },
        {
            id: 2,
            title: "List Your Clothes, Earn Money!",
            subtitle: "Turn your wardrobe into income • Your clothes, your prices, your rules",
            discount: "BECOME A SELLER",
            image: "/slide2.jpg",
            bgColor: "from-pink-500 to-rose-600",
            buttonText: "Start Earning",
            features: ["💰 Earn Per Rental", "🛡️ Security Deposit", "⏰ Late Fee Protection"],
            useBackgroundImage: true
        },
        {
            id: 3,
            title: "Safe & Secure Rentals!",
            subtitle: "Security deposits protect sellers • Late return charges ensure timely returns",
            discount: "100% PROTECTED",
            image: "/slide3.jpg",
            bgColor: "from-purple-500 to-indigo-600",
            buttonText: "How It Works",
            features: ["🔐 Refundable Deposit", "⚠️ Late Fee Policy", "✅ Verified Users"],
            useBackgroundImage: true
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="animate-slide-up">
            {/* Image Slider - Flipkart Style */}
            <div className="relative w-full h-[400px] overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                            }`}
                    >
                        <div className={`w-full h-full relative ${slide.useBackgroundImage ? '' : `bg-gradient-to-r ${slide.bgColor}`}`}>
                            {/* Background Image for Slides */}
                            {slide.useBackgroundImage && (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${slide.image})`,
                                            backgroundPosition: slide.id === 1 ? 'center top' : slide.id === 2 ? 'center center' : 'center bottom',
                                            backgroundSize: 'cover'
                                        }}
                                    />
                                    {/* Dark Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
                                </>
                            )}

                            {/* Decorative Elements (only for non-background slides) */}
                            {!slide.useBackgroundImage && (
                                <>
                                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-300"></div>
                                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
                                </>
                            )}

                            <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
                                <div className={`grid ${slide.useBackgroundImage ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-8 items-center h-full`}>
                                    {/* Left Content */}
                                    <div className={`text-white space-y-6 ${slide.useBackgroundImage ? 'max-w-3xl' : ''}`}>
                                        <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-lg animate-pulse shadow-lg">
                                            {slide.discount}
                                        </div>
                                        <h1 className="text-5xl md:text-6xl font-black leading-tight drop-shadow-2xl">
                                            {slide.title}
                                        </h1>
                                        <p className="text-xl opacity-95 drop-shadow-lg leading-relaxed">
                                            {slide.subtitle}
                                        </p>

                                        {/* Features List */}
                                        <div className="flex flex-wrap gap-3">
                                            {slide.features.map((feature, idx) => (
                                                <div key={idx} className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-3">
                                            {slide.buttonText}
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Right Image (only for non-background slides) */}
                                    {!slide.useBackgroundImage && (
                                        <div className="relative hidden md:block">
                                            <div className="relative">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="w-full h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/30"
                                                />
                                                {/* Floating Rating Badge */}
                                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                                                        <span className="font-bold text-gray-900">4.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl z-20 transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl z-20 transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Clothing Cards Section - Moved to separate component */}
            <ClothingList />

            {/* How It Works Section */}
            < div className="py-20 px-4" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How P2P Rental Works</h2>
                        <p className="text-lg text-gray-600">Rent from real people • Protected by security deposits</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-xl font-bold">1</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Browse Listings</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Find clothes listed by real users near you for weddings, parties & events.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-4 hidden md:block">
                                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-xl font-bold">2</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pay Rental + Deposit</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Pay rental fee + refundable security deposit to protect the owner's clothes.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-4 hidden md:block">
                                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-xl font-bold">3</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Wear & Enjoy</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Pick up from seller, rock your event, and make memories in style!
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-4 hidden md:block">
                                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-xl font-bold">4</span>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Return & Get Refund</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Return on time → full deposit back. Late? Pay late fees per day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Info Box */}
                    <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">🔐 How We Protect Everyone</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🛡️</div>
                                <h4 className="font-bold text-gray-800 mb-1">Security Deposit</h4>
                                <p className="text-sm text-gray-600">Renters pay a refundable deposit to protect sellers from loss or damage</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">⏰</div>
                                <h4 className="font-bold text-gray-800 mb-1">Late Return Fees</h4>
                                <p className="text-sm text-gray-600">₹200-500/day late fee ensures clothes are returned on time</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">✅</div>
                                <h4 className="font-bold text-gray-800 mb-1">Verified Users</h4>
                                <p className="text-sm text-gray-600">All users are verified with ID & phone for safe transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Features Section */}
            < div className="py-16 px-4" >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose VastraVilla?</h2>
                    <p className="text-center text-gray-600 mb-12">India's Trusted Peer-to-Peer Clothing Rental Platform</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">P2P Marketplace</h3>
                            <p className="text-gray-600 text-sm">Rent directly from real people in your city, not big stores</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Security Deposit</h3>
                            <p className="text-gray-600 text-sm">Refundable deposit protects sellers from damage or theft</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Late Fee Policy</h3>
                            <p className="text-gray-600 text-sm">Extra charges for late returns ensure timely returns</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Earn from Wardrobe</h3>
                            <p className="text-gray-600 text-sm">List your clothes & earn money when others rent them</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Home;
