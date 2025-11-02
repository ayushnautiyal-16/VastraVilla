import React, { useState } from 'react';
import { uploadImage, compressImage, deleteImage } from '../utils/uploadImage';
import { auth } from '../utils/firebase';

const UploadClothExample = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState(null);
    const [clothDetails, setClothDetails] = useState({
        name: '',
        category: '',
        price: '',
        description: ''
    });

    // Handle file selection
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);

            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle upload
    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select an image first');
            return;
        }

        if (!auth.currentUser) {
            alert('Please login first');
            return;
        }

        try {
            setUploading(true);

            // Optional: Compress image before upload (saves storage space)
            const compressedFile = await compressImage(selectedFile, 1200, 0.8);

            // Upload to Firebase Storage
            const downloadURL = await uploadImage(
                compressedFile,
                'clothes',
                auth.currentUser.uid
            );

            setUploadedUrl(downloadURL);
            alert('Image uploaded successfully!');

            // Yahan pe tumhe Firestore mein cloth details save karni hongi
            // with this downloadURL as image field
            console.log('Image URL:', downloadURL);
            console.log('Cloth Details:', clothDetails);

        } catch (error) {
            console.error('Upload error:', error);
            alert(error.message);
        } finally {
            setUploading(false);
        }
    };

    // Handle delete
    const handleDelete = async () => {
        if (!uploadedUrl) return;

        try {
            await deleteImage(uploadedUrl);
            setUploadedUrl(null);
            setPreview(null);
            setSelectedFile(null);
            alert('Image deleted successfully');
        } catch (error) {
            console.error('Delete error:', error);
            alert('Failed to delete image');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload Your Cloth</h2>

            {/* Image Upload Area */}
            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                    Cloth Image *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                    {preview ? (
                        <div className="relative">
                            <img
                                src={preview}
                                alt="Preview"
                                className="max-h-64 mx-auto rounded-lg"
                            />
                            <button
                                onClick={() => {
                                    setPreview(null);
                                    setSelectedFile(null);
                                }}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                            >
                                ✕
                            </button>
                        </div>
                    ) : (
                        <div>
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="mt-2 text-sm text-gray-600">
                                Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, WebP up to 5MB</p>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
                    >
                        Choose Image
                    </label>
                </div>
            </div>

            {/* Cloth Details Form */}
            <div className="space-y-4 mb-6">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Cloth Name *</label>
                    <input
                        type="text"
                        value={clothDetails.name}
                        onChange={(e) => setClothDetails({ ...clothDetails, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="e.g., Designer Wedding Lehenga"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Category *</label>
                    <select
                        value={clothDetails.category}
                        onChange={(e) => setClothDetails({ ...clothDetails, category: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Category</option>
                        <option value="Bridal Wear">Bridal Wear</option>
                        <option value="Groom Wear">Groom Wear</option>
                        <option value="Party Wear">Party Wear</option>
                        <option value="Ethnic Wear">Ethnic Wear</option>
                        <option value="Formal Wear">Formal Wear</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Rental Price (per day) *</label>
                    <input
                        type="number"
                        value={clothDetails.price}
                        onChange={(e) => setClothDetails({ ...clothDetails, price: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="₹ 1000"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        value={clothDetails.description}
                        onChange={(e) => setClothDetails({ ...clothDetails, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows="3"
                        placeholder="Describe your cloth..."
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {uploading ? 'Uploading...' : 'Upload & List Cloth'}
                </button>

                {uploadedUrl && (
                    <button
                        onClick={handleDelete}
                        className="px-6 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all"
                    >
                        Delete
                    </button>
                )}
            </div>

            {/* Success Message */}
            {uploadedUrl && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">✓ Image uploaded successfully!</p>
                    <p className="text-sm text-green-600 mt-1 break-all">URL: {uploadedUrl}</p>
                </div>
            )}
        </div>
    );
};

export default UploadClothExample;
