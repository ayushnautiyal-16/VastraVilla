import React, { useState } from 'react';

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        clothName: '',
        category: '',
        size: '',
        price: '',
        duration: '',
        description: '',
        condition: 'excellent',
        occasion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Cloth Details:', formData);
        alert('Cloth added successfully!');
        // Here you can add API call to save data
        setFormData({
            clothName: '',
            category: '',
            size: '',
            price: '',
            duration: '',
            description: '',
            condition: 'excellent',
            occasion: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-lg p-6 text-white">
                    <h1 className="text-3xl font-bold">
                        Seller Admin Panel
                    </h1>
                    <p className="mt-2 text-purple-100">Add your clothes for rent</p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-b-lg shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Cloth Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Cloth Name *
                            </label>
                            <input
                                type="text"
                                name="clothName"
                                value={formData.clothName}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Designer Wedding Sherwani"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Category and Size */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category *
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">Select Category</option>
                                    <option value="men-ethnic">Men's Ethnic Wear</option>
                                    <option value="women-ethnic">Women's Ethnic Wear</option>
                                    <option value="men-western">Men's Western Wear</option>
                                    <option value="women-western">Women's Western Wear</option>
                                    <option value="accessories">Accessories</option>
                                    <option value="kids">Kids Wear</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Size *
                                </label>
                                <select
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">Select Size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                    <option value="Free Size">Free Size</option>
                                </select>
                            </div>
                        </div>

                        {/* Price and Duration */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Rent Price per Day (₹) *
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., 500"
                                    min="0"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Minimum Rental Days *
                                </label>
                                <input
                                    type="number"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., 3"
                                    min="1"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Occasion and Condition */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Occasion *
                                </label>
                                <select
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">Select Occasion</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="party">Party</option>
                                    <option value="formal">Formal Event</option>
                                    <option value="festival">Festival</option>
                                    <option value="casual">Casual Event</option>
                                    <option value="reception">Reception</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Condition *
                                </label>
                                <select
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="excellent">Excellent</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Describe your cloth, material, color, special features, etc."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Upload Images
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="hidden"
                                    id="image-upload"
                                />
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-gray-600 mb-2">Click to upload images</p>
                                    <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:-translate-y-0.5 shadow-lg"
                            >
                                Add Cloth for Rent
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({
                                    clothName: '',
                                    category: '',
                                    size: '',
                                    price: '',
                                    duration: '',
                                    description: '',
                                    condition: 'excellent',
                                    occasion: ''
                                })}
                                className="px-8 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="font-semibold text-gray-800 mb-1">Earn Money</h3>
                        <p className="text-sm text-gray-600">List your clothes and start earning</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <h3 className="font-semibold text-gray-800 mb-1">Secure Platform</h3>
                        <p className="text-sm text-gray-600">Your items are protected</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h3 className="font-semibold text-gray-800 mb-1">Quick Listing</h3>
                        <p className="text-sm text-gray-600">Add items in minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
