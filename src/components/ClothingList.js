import React from 'react';
import ClothingCard from './ClothingCard';
import { clothingItems } from '../data/clothingData';

const ClothingList = () => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular Rentals</h2>
                    <p className="text-gray-600">Discover our trending collection for weddings, parties & events</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {clothingItems.map((item) => (
                        <ClothingCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClothingList;
