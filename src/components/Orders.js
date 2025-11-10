import React, { useState } from 'react';

const Orders = () => {
    const [activeTab, setActiveTab] = useState('active'); // active, completed, cancelled

    const orders = {
        active: [
            {
                id: 'ORD-2023-001',
                name: 'Designer Wedding Lehenga',
                image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop',
                price: 2500,
                duration: '3 days',
                rentalDate: '2023-12-25 to 2023-12-28',
                status: 'Active',
                statusColor: 'green'
            },
            {
                id: 'ORD-2023-002',
                name: 'Royal Sherwani',
                image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=300&h=400&fit=crop',
                price: 1800,
                duration: '3 days',
                rentalDate: '2023-12-20 to 2023-12-23',
                status: 'Shipped',
                statusColor: 'blue'
            }
        ],
        completed: [
            {
                id: 'ORD-2023-003',
                name: 'Party Gown',
                image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop',
                price: 1200,
                duration: '1 day',
                rentalDate: '2023-11-15',
                status: 'Returned',
                statusColor: 'gray'
            },
            {
                id: 'ORD-2023-004',
                name: 'Traditional Saree',
                image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop',
                price: 800,
                duration: '2 days',
                rentalDate: '2023-10-20 to 2023-10-22',
                status: 'Completed',
                statusColor: 'gray'
            }
        ],
        cancelled: [
            {
                id: 'ORD-2023-005',
                name: 'Indo-Western Outfit',
                image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=300&h=400&fit=crop',
                price: 1000,
                duration: '2 days',
                rentalDate: '2023-10-10',
                status: 'Cancelled',
                statusColor: 'red'
            }
        ]
    };

    const getStatusColor = (color) => {
        const colors = {
            green: 'bg-green-100 text-green-700',
            blue: 'bg-blue-100 text-blue-700',
            gray: 'bg-gray-100 text-gray-700',
            red: 'bg-red-100 text-red-700'
        };
        return colors[color] || colors.gray;
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Orders</h1>
                    <p className="text-gray-600">Track and manage your rental orders</p>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-md mb-6">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${
                                activeTab === 'active'
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Active Orders ({orders.active.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${
                                activeTab === 'completed'
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Completed ({orders.completed.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('cancelled')}
                            className={`flex-1 px-6 py-4 font-semibold transition-all ${
                                activeTab === 'cancelled'
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Cancelled ({orders.cancelled.length})
                        </button>
                    </div>
                </div>

                {/* Orders List */}
                <div className="space-y-4">
                    {orders[activeTab].length === 0 ? (
                        <div className="bg-white rounded-2xl p-16 text-center">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Orders Found</h2>
                            <p className="text-gray-600">You don't have any {activeTab} orders</p>
                        </div>
                    ) : (
                        orders[activeTab].map((order) => (
                            <div key={order.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Image */}
                                    <div className="w-full md:w-48 h-64 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src={order.image}
                                            alt={order.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/300x400?text=VastraVilla";
                                            }}
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{order.name}</h3>
                                                <p className="text-gray-500">Order ID: {order.id}</p>
                                            </div>
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.statusColor)}`}>
                                                {order.status}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-gray-700">{order.rentalDate}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-700">{order.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="text-2xl font-bold text-purple-600">₹{order.price}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            {activeTab === 'active' && (
                                                <>
                                                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                                                        Track Order
                                                    </button>
                                                    <button className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                                                        Contact Seller
                                                    </button>
                                                </>
                                            )}
                                            {activeTab === 'completed' && (
                                                <>
                                                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                                                        Rent Again
                                                    </button>
                                                    <button className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                                                        Write Review
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Orders;
