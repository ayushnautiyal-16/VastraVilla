import React, { useState } from 'react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 98765 43210',
        address: '123 Fashion Street, Mumbai',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        bio: 'Fashion enthusiast and sustainable clothing advocate'
    });

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would save to backend
        console.log('Profile saved:', profileData);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
                            <p className="text-white/90">{profileData.email}</p>
                        </div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
                        <button
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
                        >
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profileData.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={profileData.address}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                value={profileData.city}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                            <input
                                type="text"
                                name="state"
                                value={profileData.state}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* PIN Code */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                            <input
                                type="text"
                                name="pincode"
                                value={profileData.pincode}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all`}
                            />
                        </div>

                        {/* Bio */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                            <textarea
                                name="bio"
                                value={profileData.bio}
                                onChange={handleChange}
                                disabled={!isEditing}
                                rows="3"
                                className={`w-full px-4 py-3 border rounded-lg ${isEditing ? 'border-purple-300 focus:ring-2 focus:ring-purple-500' : 'border-gray-200 bg-gray-50'} outline-none transition-all resize-none`}
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">12</h3>
                        <p className="text-gray-600">Total Orders</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">8</h3>
                        <p className="text-gray-600">Wishlist Items</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">250</h3>
                        <p className="text-gray-600">Reward Points</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
