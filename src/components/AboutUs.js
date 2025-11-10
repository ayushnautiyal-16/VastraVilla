import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About VastraVilla</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Revolutionizing fashion rental with sustainable style and affordable luxury
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            VastraVilla was born from a simple idea: everyone deserves to look their best without breaking the bank. 
                            We noticed that beautiful designer clothes often sit in wardrobes, worn just once or twice for special occasions.
                        </p>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            Why not share these stunning outfits with others? We created a platform where fashion lovers can rent 
                            premium clothing for weddings, parties, and special events at a fraction of the retail price.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, VastraVilla is more than just a rental service – we're a community committed to sustainable 
                            fashion and making luxury accessible to everyone.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-purple-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                            <div className="text-gray-700 font-medium">Designer Outfits</div>
                        </div>
                        <div className="bg-pink-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                            <div className="text-gray-700 font-medium">Happy Customers</div>
                        </div>
                        <div className="bg-yellow-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
                            <div className="text-gray-700 font-medium">Active Sellers</div>
                        </div>
                        <div className="bg-green-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                            <div className="text-gray-700 font-medium">Rentals Completed</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To make premium fashion accessible to everyone while promoting sustainable consumption. 
                                We believe in sharing resources, reducing waste, and empowering individuals to express 
                                their style without compromising on quality or the environment.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To become India's leading fashion rental platform, creating a circular economy where 
                                beautiful clothes are shared, cherished, and enjoyed by many. We envision a future where 
                                sustainable fashion is the norm, not the exception.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Sustainability */}
                    <div className="text-center p-6 hover:shadow-xl rounded-2xl transition-all">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
                        <p className="text-gray-600">
                            Reducing fashion waste by promoting the sharing economy and circular fashion consumption.
                        </p>
                    </div>

                    {/* Quality */}
                    <div className="text-center p-6 hover:shadow-xl rounded-2xl transition-all">
                        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
                        <p className="text-gray-600">
                            Every outfit is thoroughly verified, cleaned, and maintained to ensure premium quality.
                        </p>
                    </div>

                    {/* Affordability */}
                    <div className="text-center p-6 hover:shadow-xl rounded-2xl transition-all">
                        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Affordability</h3>
                        <p className="text-gray-600">
                            Making designer fashion accessible at a fraction of retail prices for everyone.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="text-center p-6 hover:shadow-xl rounded-2xl transition-all">
                        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Community First</h3>
                        <p className="text-gray-600">
                            Building a trusted community where members share, care, and support each other.
                        </p>
                    </div>

                    {/* Trust */}
                    <div className="text-center p-6 hover:shadow-xl rounded-2xl transition-all">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Trust & Safety</h3>
                        <p className="text-gray-600">
                            Ensuring secure transactions and verified listings for a safe rental experience.
                        </p>
                    </div>

                    {/* Innovation */}
                    <div className="text-center p-6 hover:shadow-xl rounded-2xl transition-all">
                        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
                        <p className="text-gray-600">
                            Constantly improving our platform with new features and better user experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Join Our Fashion Community</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Start renting designer clothes or list your wardrobe to earn extra income
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Browse Collections
                            </button>
                        </Link>
                        <Link to="/seller">
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Become a Seller
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
