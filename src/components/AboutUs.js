import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About VastraVilla</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        India's First Peer-to-Peer Clothing Rental Marketplace
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            VastraVilla was born from a simple observation: beautiful designer clothes sit unused in wardrobes
                            while others struggle to afford them for special occasions.
                        </p>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            We created India's first <strong>Peer-to-Peer clothing rental platform</strong> where anyone can list their
                            clothes for rent and earn money, while others can borrow premium outfits at affordable prices.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With our <strong>security deposit system</strong> and <strong>late fee policy</strong>, both sellers and renters
                            are protected, making fashion sharing safe and trustworthy.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-purple-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                            <div className="text-gray-700 font-medium">Listed Outfits</div>
                        </div>
                        <div className="bg-pink-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                            <div className="text-gray-700 font-medium">Happy Users</div>
                        </div>
                        <div className="bg-yellow-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
                            <div className="text-gray-700 font-medium">Active Sellers</div>
                        </div>
                        <div className="bg-green-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-green-600 mb-2">₹0</div>
                            <div className="text-gray-700 font-medium">Fraud Cases</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How P2P Works */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">How Our P2P Model Works</h2>
                    <p className="text-center text-gray-600 mb-12">Safe, secure, and beneficial for everyone</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* For Renters */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">👗</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">For Renters</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>Browse & Book:</strong> Find clothes from real users near you
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>Pay Rental + Deposit:</strong> Security deposit is 100% refundable
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>Use & Return:</strong> Return on time to get full deposit back
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-500 mt-1">⚠️</span>
                                    <div>
                                        <strong>Late Returns:</strong> ₹200-500/day extra charges apply
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* For Sellers */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">For Sellers (Cloth Owners)</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>List Your Clothes:</strong> Set your own rental price & duration
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>Security Deposit:</strong> Renter pays deposit to protect your clothes
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>Earn Money:</strong> Get rental income for clothes sitting in wardrobe
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <div>
                                        <strong>Protected:</strong> Late fees ensure timely return, deposit covers damages
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security & Protection */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🔐 How We Protect Everyone</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Security Deposit</h3>
                        <p className="text-gray-600 mb-4">
                            Renters pay a refundable security deposit (typically 50-100% of item value) when booking.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Returned if clothes come back in good condition</li>
                            <li>• Covers any damage or loss</li>
                            <li>• Protects sellers from fraud</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500">
                        <div className="text-4xl mb-4">⏰</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Late Return Fees</h3>
                        <p className="text-gray-600 mb-4">
                            Extra charges apply if clothes are not returned on agreed date.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• ₹200-500 per day late fee</li>
                            <li>• Ensures timely returns</li>
                            <li>• Sellers don't lose rental opportunities</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                        <div className="text-4xl mb-4">✅</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Verified Users</h3>
                        <p className="text-gray-600 mb-4">
                            All users must verify their identity before transacting.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Phone number verification</li>
                            <li>• ID proof for sellers</li>
                            <li>• Rating & review system</li>
                        </ul>
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
