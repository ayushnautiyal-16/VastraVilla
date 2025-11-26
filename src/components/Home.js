import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClothingList from './ClothingList';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Rent Designer Fashion with Ease",
            subtitle: "Premium outfits at pocket-friendly prices • Pay only for what you wear",
            discount: "STARTING ₹399/DAY",
            image: "/slide1.jpg",
            bgColor: "from-blue-500 to-purple-600",
            buttonText: "Start Renting Now",
            features: ["💰 Save 80% vs Buying", "⚡ Instant Booking", "🎉 1000+ Styles"],
            useBackgroundImage: true
        },
        {
            id: 2,
            title: "Why Rent? Smart Fashion Choice!",
            subtitle: "Wear designer outfits for every occasion without the hefty price tag",
            discount: "BENEFITS",
            image: "/slide2.jpg",
            bgColor: "from-pink-500 to-rose-600",
            buttonText: "See Benefits",
            features: ["♻️ Eco-Friendly Fashion", "👗 New Style Every Time", "💳 No Commitment"],
            useBackgroundImage: true
        },
        {
            id: 3,
            title: "More Profit, Less Spending!",
            subtitle: "10 designer outfits for the price of 1 • Premium quality guaranteed",
            discount: "SAVE BIG",
            image: "/slide3.jpg",
            bgColor: "from-purple-500 to-indigo-600",
            buttonText: "Calculate Savings",
            features: ["📈 Max Value", "✨ Premium Brands", "🎁 Exclusive Deals"],
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
        <div className="animate-slide-up bg-gray-50 min-h-screen">
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
            < div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4" >
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
            </div >

            {/* Features Section */}
            < div className="bg-white py-16 px-4" >
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
            </div >
        </div >
    );
};

export default Home;
