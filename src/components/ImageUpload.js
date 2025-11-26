import React, { useState } from 'react';
import { uploadImage, uploadMultipleImages } from '../utils/uploadImage';

/**
 * Image Upload Component with Preview
 * @param {boolean} multiple - Allow multiple file selection
 * @param {function} onUploadComplete - Callback with uploaded URL(s)
 * @param {string} folder - Storage folder (default: 'clothes')
 */
const ImageUpload = ({
    multiple = false,
    onUploadComplete,
    folder = 'clothes',
    maxFiles = 5
}) => {
    const [uploading, setUploading] = useState(false);
    const [previews, setPreviews] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = async (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        // Create previews
        const previewUrls = Array.from(files).map(file => ({
            url: URL.createObjectURL(file),
            name: file.name
        }));
        setPreviews(previewUrls);

        // Start upload
        setUploading(true);
        setUploadProgress(0);

        try {
            if (multiple) {
                // Upload multiple images
                const urls = await uploadMultipleImages(files, folder);
                console.log('Uploaded URLs:', urls);
                onUploadComplete(urls);
            } else {
                // Upload single image
                const result = await uploadImage(files[0], folder);
                if (result.success) {
                    console.log('Uploaded URL:', result.url);
                    onUploadComplete(result.url);
                } else {
                    alert(`Upload failed: ${result.error}`);
                }
            }

            setUploadProgress(100);
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed! Please try again.');
        } finally {
            setUploading(false);
            // Clean up previews after 2 seconds
            setTimeout(() => {
                previews.forEach(preview => URL.revokeObjectURL(preview.url));
                setPreviews([]);
            }, 2000);
        }
    };

    return (
        <div className="w-full">
            {/* Upload Input */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-purple-500 transition-colors">
                <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    multiple={multiple}
                    onChange={handleFileChange}
                    disabled={uploading}
                    className="hidden"
                    id="image-upload-input"
                />
                <label
                    htmlFor="image-upload-input"
                    className="flex flex-col items-center cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-400 mb-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <p className="text-sm text-gray-600 mb-1">
                        {multiple ? 'Click to upload images' : 'Click to upload image'}
                    </p>
                    <p className="text-xs text-gray-400">
                        JPG, PNG, WEBP (Max 5MB {multiple && `• Max ${maxFiles} files`})
                    </p>
                </label>
            </div>

            {/* Progress Bar */}
            {uploading && (
                <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Uploading...</span>
                        <span className="text-sm font-semibold text-purple-600">
                            {uploadProgress}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Image Previews */}
            {previews.length > 0 && (
                <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                        Preview ({previews.length} {previews.length === 1 ? 'image' : 'images'})
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {previews.map((preview, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200"
                            >
                                <img
                                    src={preview.url}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {uploading && (
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Success Message */}
            {!uploading && uploadProgress === 100 && (
                <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                    <p className="text-sm text-green-700 font-semibold">
                        ✅ Upload successful!
                    </p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
