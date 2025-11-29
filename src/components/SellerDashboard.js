import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where, deleteDoc, doc, serverTimestamp, onSnapshot, getDocs } from 'firebase/firestore';
import { uploadImageToStorage } from '../utils/storageUtils';

const SellerDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Wedding Wear',
        price: '',
        size: 'M',
        description: '',
        image: null
    });
    const [listings, setListings] = useState([]);

    useEffect(() => {
        let unsubscribeFirestore = null;

        const unsubscribeAuth = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log('User logged in:', currentUser.uid);

                // Fetch ALL data from Firebase ONLY
                try {
                    console.log('Fetching from Firebase...');
                    const q = query(
                        collection(db, 'listings'),
                        where('sellerId', '==', currentUser.uid)
                    );

                    // One-time fetch
                    const querySnapshot = await getDocs(q);
                    const firebaseListings = [];
                    querySnapshot.forEach((docSnap) => {
                        firebaseListings.push({
                            id: docSnap.id,
                            ...docSnap.data()
                        });
                    });

                    console.log('Firebase data fetched:', firebaseListings.length, 'items');
                    setListings(firebaseListings);
                    setLoading(false);

                    // Real-time listener for live updates
                    unsubscribeFirestore = onSnapshot(q,
                        (snapshot) => {
                            const fetchedListings = [];
                            snapshot.forEach((docSnap) => {
                                fetchedListings.push({ id: docSnap.id, ...docSnap.data() });
                            });
                            console.log('Firebase real-time update:', fetchedListings.length, 'items');
                            setListings(fetchedListings);
                        },
                        (error) => {
                            console.error('Firestore listener error:', error);
                        }
                    );
                } catch (error) {
                    console.error('Firebase fetch error:', error);
                    setListings([]); // Empty if Firebase fails
                    setLoading(false);
                }
            } else {
                navigate('/seller-auth');
            }
        });

        return () => {
            unsubscribeAuth();
            if (unsubscribeFirestore) {
                unsubscribeFirestore();
            }
        };
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
        setUploadError('');

        try {
            console.log('Starting image upload...');

            // Upload image to Firebase Storage
            const result = await uploadImageToStorage(formData.image, 'seller-items');

            if (!result || !result.success) {
                throw new Error('Image upload failed');
            }

            console.log('Image uploaded successfully:', result.url);

            // Create new listing object for Firebase
            const newListing = {
                name: formData.name,
                category: formData.category,
                price: parseInt(formData.price),
                size: formData.size,
                description: formData.description,
                status: 'Active',
                rentals: 0,
                revenue: 0,
                image: result.url,
                sellerId: user.uid,
                sellerName: user.displayName || user.email,
                createdAt: serverTimestamp()
            };

            // Save to Firestore ONLY
            console.log('Saving to Firestore...');
            const docRef = await addDoc(collection(db, 'listings'), newListing);
            console.log('Saved to Firestore with ID:', docRef.id);

            // Add to local state with Firestore ID (onSnapshot will also update)
            setListings(prev => [...prev, { id: docRef.id, ...newListing, createdAt: new Date() }]);

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

            // Show success
            setUploading(false);
            setUploadSuccess(true);

            // After 2 seconds, switch to listings tab
            setTimeout(() => {
                setUploadSuccess(false);
                setActiveTab('overview');
            }, 2000);

        } catch (error) {
            console.error('Upload error:', error);
            setUploadError(`Error: ${error.message}`);
            setUploading(false);
        }
    };

    // Delete listing from Firebase
    const handleDeleteListing = async (listingId) => {
        if (window.confirm('Are you sure you want to delete this listing?')) {
            try {
                // Delete from Firestore
                await deleteDoc(doc(db, 'listings', listingId));
                console.log('Deleted from Firestore:', listingId);

                // Update local state
                setListings(prev => prev.filter(item => item.id !== listingId));
            } catch (error) {
                console.error('Error deleting listing:', error);
                alert('Error deleting listing: ' + error.message);
            }
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
                            <>
                                {loading ? (
                                    <div className="flex justify-center items-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                                        <span className="ml-3 text-gray-600">Loading your listings...</span>
                                    </div>
                                ) : listings.length === 0 ? (
                                    <div className="text-center py-12">
                                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">No Listings Yet</h3>
                                        <p className="text-gray-600 mb-4">Start by adding your first clothing item for rent</p>
                                        <button
                                            onClick={() => setActiveTab('add')}
                                            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                        >
                                            + Add Your First Item
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {listings.map((item) => {
                                            // Format date
                                            const createdDate = item.createdAt?.toDate ? item.createdAt.toDate() : (item.createdAt ? new Date(item.createdAt) : new Date());
                                            const formattedDate = createdDate.toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            });

                                            return (
                                                <div key={item.id} className="border rounded-xl overflow-hidden hover:shadow-xl transition-all bg-white">
                                                    <div className="relative">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-52 object-cover"
                                                        />
                                                        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${item.status === 'Active'
                                                            ? 'bg-green-500 text-white'
                                                            : 'bg-yellow-500 text-white'
                                                            }`}>
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                    <div className="p-4">
                                                        <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">{item.category}</span>
                                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">Size: {item.size}</span>
                                                        </div>

                                                        {item.description && (
                                                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                                                        )}

                                                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                                <div>
                                                                    <span className="text-gray-500">Rent Price</span>
                                                                    <p className="font-bold text-purple-600 text-lg">₹{item.price}/day</p>
                                                                </div>
                                                                <div>
                                                                    <span className="text-gray-500">Listed On</span>
                                                                    <p className="font-semibold text-gray-800">{formattedDate}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-between text-sm mb-3">
                                                            <div className="text-center">
                                                                <p className="text-gray-500">Rentals</p>
                                                                <p className="font-bold text-blue-600">{item.rentals || 0}</p>
                                                            </div>
                                                            <div className="text-center">
                                                                <p className="text-gray-500">Revenue</p>
                                                                <p className="font-bold text-green-600">₹{(item.revenue || 0).toLocaleString()}</p>
                                                            </div>
                                                            <div className="text-center">
                                                                <p className="text-gray-500">Deposit</p>
                                                                <p className="font-bold text-amber-600">₹{item.price * 3 || 0}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-2">
                                                            <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                                                                ✏️ Edit
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteListing(item.id)}
                                                                className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                                                            >
                                                                🗑️ Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </>
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
                                    {/* Success Message */}
                                    {uploadSuccess && (
                                        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg flex items-center gap-3 animate-pulse">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <p className="font-bold text-lg">🎉 Photo Uploaded Successfully!</p>
                                                <p className="text-sm">Your item has been added. Redirecting to listings...</p>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={uploading || uploadSuccess}
                                        className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg ${uploadSuccess
                                            ? 'bg-green-500 text-white cursor-not-allowed'
                                            : uploading
                                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                                            }`}
                                    >
                                        {uploadSuccess ? '✅ Uploaded Successfully!' : uploading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Uploading to Firebase...
                                            </span>
                                        ) : '➕ Add Item'}
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
