import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Upload image to Firebase Storage
 * @param {File} file - Image file to upload
 * @param {string} folder - Folder name in storage (e.g., 'clothes', 'profile')
 * @param {string} userId - User ID for organizing files
 * @returns {Promise<string>} - Download URL of uploaded image
 */
export const uploadImage = async (file, folder = 'clothes', userId) => {
    try {
        // Validate file
        if (!file) {
            throw new Error("No file provided");
        }

        // Check file size (max 5MB recommended for free tier)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            throw new Error("File size exceeds 5MB limit");
        }

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            throw new Error("Only JPEG, PNG, and WebP images are allowed");
        }

        // Create unique filename
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 9);
        const filename = `${timestamp}_${randomString}_${file.name}`;

        // Create storage reference
        const storageRef = ref(storage, `${folder}/${userId}/${filename}`);

        // Upload file
        const snapshot = await uploadBytes(storageRef, file);

        // Get download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

/**
 * Delete image from Firebase Storage
 * @param {string} imageUrl - Full download URL of the image
 * @returns {Promise<void>}
 */
export const deleteImage = async (imageUrl) => {
    try {
        if (!imageUrl) return;

        // Extract path from URL
        const baseUrl = "https://firebasestorage.googleapis.com/v0/b/";
        const startIndex = imageUrl.indexOf(baseUrl);

        if (startIndex === -1) {
            throw new Error("Invalid Firebase Storage URL");
        }

        // Get the path after '/o/'
        const path = imageUrl.split('/o/')[1].split('?')[0];
        const decodedPath = decodeURIComponent(path);

        // Create reference and delete
        const imageRef = ref(storage, decodedPath);
        await deleteObject(imageRef);

        console.log("Image deleted successfully");
    } catch (error) {
        console.error("Error deleting image:", error);
        throw error;
    }
};

/**
 * Compress image before upload (optional but recommended for free tier)
 * @param {File} file - Image file to compress
 * @param {number} maxWidth - Maximum width (default: 1200px)
 * @param {number} quality - Image quality 0-1 (default: 0.8)
 * @returns {Promise<File>} - Compressed image file
 */
export const compressImage = (file, maxWidth = 1200, quality = 0.8) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // Calculate new dimensions
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Convert canvas to blob
                canvas.toBlob(
                    (blob) => {
                        const compressedFile = new File([blob], file.name, {
                            type: file.type,
                            lastModified: Date.now(),
                        });
                        resolve(compressedFile);
                    },
                    file.type,
                    quality
                );
            };

            img.onerror = (error) => reject(error);
        };

        reader.onerror = (error) => reject(error);
    });
};
