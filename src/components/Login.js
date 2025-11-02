import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import checkValidData from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // Sign in sign up logic
        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: "https://ui-avatars.com/api/?name=" + name.current.value
                    }).then(() => {
                        console.log("User registered successfully:", auth.currentUser);
                        navigate("/");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User logged in:", user);
                    navigate("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + " - " + errorCode);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Login Form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="relative z-10 w-full max-w-md p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 animate-slide-up"
            >
                {/* Welcome Section */}
                <div key={isSignInForm ? 'signin' : 'signup'} className="text-center mb-8 animate-slide-up">
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">
                        {isSignInForm ? "Welcome Back to VastraVilla!" : "Create Your VastraVilla Account"}
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {isSignInForm
                            ? "Sign in to explore and rent stylish clothes for every occasion"
                            : "Join our community to share, reuse, and rent clothes sustainably"}
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>

                {/* Name input only for Sign Up */}
                {!isSignInForm && (
                    <div className="mb-4">
                        <input
                            ref={name}
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                    </div>
                )}

                <div className="mb-4">
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                </div>

                <div className="mb-4">
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                </div>

                {errorMessage && (
                    <p className="text-red-600 font-semibold text-sm mb-4 bg-red-50 p-3 rounded-lg border border-red-200">
                        {errorMessage}
                    </p>
                )}

                <button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-center mt-6 text-gray-600">
                    {isSignInForm ? "New to VastraVilla? " : "Already have an account? "}
                    <span
                        className="text-purple-600 font-semibold cursor-pointer hover:text-purple-700 hover:underline"
                        onClick={toggleSignInForm}
                    >
                        {isSignInForm ? "Sign Up Now" : "Sign In Now"}
                    </span>
                </p>

                {/* Back to Home */}
                <button
                    onClick={() => navigate("/")}
                    className="w-full mt-4 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
                >
                    ← Back to Home
                </button>
            </form>
        </div>
    );
};

export default Login;
