import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { uploadImageToStorage } from '../utils/storageUtils';

const SellerDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Wedding Wear',
        price: '',
        size: 'M',
        description: '',
        image: null
    });
    const [listings, setListings] = useState([
        {
            id: 1,
            name: "Designer Lehenga",
            category: "Wedding Wear",
            price: 2000,
            status: "Active",
            rentals: 12,
            revenue: 24000,
            image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Royal Sherwani",
            category: "Groom Wear",
            price: 1500,
            status: "Active",
            rentals: 8,
            revenue: 12000,
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=300&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Party Gown",
            category: "Party Wear",
            price: 1200,
            status: "Rented",
            rentals: 15,
            revenue: 18000,
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=300&fit=crop"
        }
    ]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                navigate('/seller-auth');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.error('Logout error:', error);
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }));
            // Show preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddItem = async (e) => {
        e.preventDefault();
        setUploadError(null);

        if (!formData.name || !formData.price) {
            setUploadError('Please fill all required fields');
            return;
        }

        if (!formData.image) {
            setUploadError('Please select an image');
            return;
        }

        setUploading(true);
        try {
            // Upload image to Firebase Storage
            const result = await uploadImageToStorage(formData.image, 'seller-items');

            // Create new listing with uploaded image
            const newListing = {
                id: listings.length + 1,
                name: formData.name,
                category: formData.category,
                price: parseInt(formData.price),
                size: formData.size,
                description: formData.description,
                status: 'Active',
                rentals: 0,
                revenue: 0,
                image: result.url
            };

            setListings(prev => [...prev, newListing]);

            // Reset form
            setFormData({
                name: '',
                category: 'Wedding Wear',
                price: '',
                size: 'M',
                description: '',
                image: null
            });
            setUploadedImage(null);
            setActiveTab('overview');

            alert('Item added successfully!');
        } catch (error) {
            setUploadError(`Error: ${error.message}`);
            console.error('Upload error:', error);
        } finally {
            setUploading(false);
        }
    };

    const totalRevenue = listings.reduce((sum, item) => sum + item.revenue, 0);
    const totalRentals = listings.reduce((sum, item) => sum + item.rentals, 0);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold text-gray-800">VastraVilla Seller</h1>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                                Seller Dashboard
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src={user.photoURL || "https://ui-avatars.com/api/?name=User"}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-purple-500"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{user.displayName || 'Seller'}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Listings</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{listings.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Rentals</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{totalRentals}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Revenue</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">₹{totalRevenue.toLocaleString()}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Active Items</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">
                                    {listings.filter(item => item.status === 'Active').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-md mb-6">
                    <div className="border-b border-gray-200">
                        <div className="flex gap-4 px-6">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`py-4 px-4 font-semibold border-b-2 transition-colors ${activeTab === 'overview'
                                    ? 'border-purple-600 text-purple-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                My Listings
                            </button>
                            <button
                                onClick={() => setActiveTab('add')}
                                className={`py-4 px-4 font-semibold border-b-2 transition-colors ${activeTab === 'add'
                                    ? 'border-purple-600 text-purple-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Add New Item
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'overview' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {listings.map((item) => (
                                    <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-800">{item.name}</h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === 'Active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Price:</span>
                                                    <span className="font-semibold text-purple-600">₹{item.price}/day</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Rentals:</span>
                                                    <span className="font-semibold">{item.rentals}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Revenue:</span>
                                                    <span className="font-semibold text-green-600">₹{item.revenue.toLocaleString()}</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-2">
                                                <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                                                    Edit
                                                </button>
                                                <button className="flex-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'add' && (
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Add New Clothing Item</h3>
                                <form onSubmit={handleAddItem} className="space-y-4">
                                    {uploadError && (
                                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                                            {uploadError}
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Item Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            placeholder="E.g., Designer Wedding Lehenga"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleFormChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option>Wedding Wear</option>
                                            <option>Party Wear</option>
                                            <option>Ethnic Wear</option>
                                            <option>Formal Wear</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Price (per day) *</label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleFormChange}
                                                placeholder="1500"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                                            <select
                                                name="size"
                                                value={formData.size}
                                                onChange={handleFormChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            >
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                                <option>XXL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleFormChange}
                                            rows="4"
                                            placeholder="Describe your item..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image *</label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                            id="image-input"
                                        />
                                        <label
                                            htmlFor="image-input"
                                            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer block"
                                        >
                                            {uploadedImage ? (
                                                <div className="space-y-4">
                                                    <img src={uploadedImage} alt="Preview" className="w-full h-40 object-cover rounded-lg mx-auto" />
                                                    <p className="text-sm text-green-600 font-semibold">✓ Image selected</p>
                                                    <p className="text-xs text-gray-500">Click to change image</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                    <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                                                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={uploading}
                                        className={`w-full py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${uploading
                                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                                            }`}
                                    >
                                        {uploading ? 'Uploading...' : 'Add Item'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;
