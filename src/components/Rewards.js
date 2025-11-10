    import React from 'react';

const Rewards = () => {
    const rewardPoints = 2500;
    const nextReward = 3000;
    const progress = (rewardPoints / nextReward) * 100;

    const rewardHistory = [
        { id: 1, action: 'Order Completed', points: 50, date: '2023-12-15', type: 'earned' },
        { id: 2, action: 'Referral Bonus', points: 100, date: '2023-12-10', type: 'earned' },
        { id: 3, action: 'Redeemed for discount', points: -200, date: '2023-12-05', type: 'redeemed' },
        { id: 4, action: 'Signup Bonus', points: 500, date: '2023-11-01', type: 'earned' },
    ];

    const availableRewards = [
        { id: 1, name: '10% Off Coupon', points: 500, description: 'Get 10% off on your next rental' },
        { id: 2, name: '₹200 Off', points: 1000, description: 'Flat ₹200 discount on orders above ₹2000' },
        { id: 3, name: 'Free Delivery', points: 300, description: 'Free delivery on your next order' },
        { id: 4, name: '₹500 Off', points: 2000, description: 'Flat ₹500 discount on orders above ₹5000' },
        { id: 5, name: 'Premium Membership', points: 5000, description: '1 month free premium membership' },
        { id: 6, name: '₹1000 Off', points: 4000, description: 'Flat ₹1000 discount on orders above ₹10000' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Rewards & Points</h1>
                    <p className="text-gray-600">Earn points with every rental and unlock exciting rewards</p>
                </div>

                {/* Points Card */}
                <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-8 text-white mb-8 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-white/80 text-lg mb-2">Your Reward Points</p>
                            <h2 className="text-6xl font-bold mb-4">{rewardPoints}</h2>
                            <div className="flex items-center gap-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <span className="text-lg">{nextReward - rewardPoints} points to next reward</span>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                                <div 
                                    className="bg-yellow-300 h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-white/80">{progress.toFixed(0)}% to next milestone</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                                <p className="text-3xl font-bold">5</p>
                                <p className="text-sm opacity-80">Rewards Claimed</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-3xl font-bold">3</p>
                                <p className="text-sm opacity-80">Referrals</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Available Rewards */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Rewards</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {availableRewards.map((reward) => (
                            <div key={reward.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                    </div>
                                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        {reward.points} pts
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{reward.name}</h3>
                                <p className="text-gray-600 mb-4">{reward.description}</p>
                                <button 
                                    className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                                        rewardPoints >= reward.points
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                    disabled={rewardPoints < reward.points}
                                >
                                    {rewardPoints >= reward.points ? 'Redeem Now' : `Need ${reward.points - rewardPoints} more points`}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Earn More Points */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Earn More Points</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Complete Orders</h3>
                            <p className="text-gray-600 text-sm">Earn 50 points per rental</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Refer Friends</h3>
                            <p className="text-gray-600 text-sm">Get 100 points per referral</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Write Reviews</h3>
                            <p className="text-gray-600 text-sm">Earn 25 points per review</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Daily Check-in</h3>
                            <p className="text-gray-600 text-sm">Get 5 points every day</p>
                        </div>
                    </div>
                </div>

                {/* Points History */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Points History</h2>
                    <div className="space-y-4">
                        {rewardHistory.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                        item.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                                    }`}>
                                        {item.type === 'earned' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.action}</h3>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                </div>
                                <div className={`text-xl font-bold ${
                                    item.type === 'earned' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {item.points > 0 ? '+' : ''}{item.points} pts
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;
