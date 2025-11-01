import React from 'react';

const Home = () => {
    return (
        <div className="px-5 py-10 max-w-6xl mx-auto">
            <div className="text-center px-5 py-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl text-white shadow-2xl">
                <h1 className="text-5xl md:text-6xl mb-4 font-bold">
                    Welcome to VastraVilla
                </h1>
                <p className="text-2xl md:text-3xl mb-3 opacity-95">
                    Rent Stylish Clothes for Every Occasion
                </p>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                    Your peer-to-peer marketplace for renting and lending clothes.
                    Perfect outfits for weddings, events, and special occasions!
                </p>
                <div className="flex gap-5 justify-center flex-wrap">
                    <button className="px-8 py-3.5 text-base font-semibold border-none rounded-lg cursor-pointer transition-all bg-white text-purple-600 hover:-translate-y-0.5 hover:shadow-2xl">
                        Browse Clothes
                    </button>
                    <button className="px-8 py-3.5 text-base font-semibold border-2 border-white rounded-lg cursor-pointer transition-all bg-transparent text-white hover:bg-white hover:text-purple-600 hover:-translate-y-0.5">
                        List Your Clothes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
