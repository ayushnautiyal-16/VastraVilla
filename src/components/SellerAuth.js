import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import checkValidData from '../utils/validate';

const SellerAuth = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const phone = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    };

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        setLoading(true);

        if (!isSignInForm) {
            // Sign up logic for seller
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: "https://ui-avatars.com/api/?name=" + name.current.value
                    }).then(() => {
                        console.log("Seller registered successfully:", auth.currentUser);
                        setLoading(false);
                        // Redirect to seller dashboard
                        navigate("/seller-dashboard");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                        setLoading(false);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                    setLoading(false);
                });
        } else {
            // Sign in logic for seller
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Seller logged in:", user);
                    setLoading(false);
                    // Redirect to seller dashboard
                    navigate("/seller-dashboard");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                    setLoading(false);
                });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">VastraVilla Seller</h1>
                    <p className="text-gray-600">
                        {isSignInForm ? 'Login to manage your listings' : 'Join as a seller today'}
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        {isSignInForm ? 'Seller Login' : 'Seller Registration'}
                    </h2>

                    {errorMessage && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        {!isSignInForm && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        ref={name}
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        ref={phone}
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                ref={email}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                ref={password}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <button
                            onClick={handleButtonClick}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : (isSignInForm ? 'Login' : 'Create Account')}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            {isSignInForm ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={toggleSignInForm}
                                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                            >
                                {isSignInForm ? 'Register Now' : 'Login Here'}
                            </button>
                        </p>
                    </div>

                    {!isSignInForm && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-sm text-gray-800 mb-2">Seller Benefits:</h3>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>✓ List unlimited products</li>
                                <li>✓ Reach thousands of customers</li>
                                <li>✓ Easy payment management</li>
                                <li>✓ Analytics dashboard</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerAuth;
