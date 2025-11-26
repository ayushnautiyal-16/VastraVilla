import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

export const uploadImageToStorage = async (file, folder = 'uploads') => {
    if (!storage) {
        throw new Error("Storage not initialized");
    }

    try {
        // Create a unique filename
        const timestamp = new Date().getTime();
        const filename = `${folder}/${timestamp}_${file.name}`;

        // Create storage reference
        const storageRef = ref(storage, filename);

        // Upload file
        console.log("Uploading file:", filename);
        const snapshot = await uploadBytes(storageRef, file);

        // Get download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log("File uploaded successfully:", downloadURL);
        return {
            success: true,
            url: downloadURL,
            path: filename
        };
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error(`Upload failed: ${error.message}`);
    }
};

export const uploadMultipleImages = async (files, folder = 'uploads') => {
    const uploadPromises = Array.from(files).map(file =>
        uploadImageToStorage(file, folder)
    );

    try {
        const results = await Promise.all(uploadPromises);
        return {
            success: true,
            urls: results.map(r => r.url),
            paths: results.map(r => r.path)
        };
    } catch (error) {
        console.error("Error uploading multiple files:", error);
        throw new Error(`Batch upload failed: ${error.message}`);
    }
};
