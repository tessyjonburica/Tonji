import React, { useState } from 'react';
import '../index.css';
import bowl from '../assets/dogbowl.png';

const TreatComponent = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("0xBC45647eA89...739FA2485F0")
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch((err) => console.error('Failed to copy text: ', err));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#1d1c18]">
            <div className="relative bg-gray-800 text-white p-8 shadow-lg max-w-md mx-3 border border-[#423f36] rounded-lg" style={{ backgroundColor: "#181814" }}>
                <h2 className="text-xl font-semibold font-inter text-center">Where you can treat</h2>
                <p className="text-center font-inter mt-4 mb-6 text-gray-400">
                    Don't miss out on the joy of owning plenty of $TONJI tokens – it's like discovering the perfect dog treat on Ton.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
                    <span className="text-sm text-gray-400">CA:</span>
                    <span className="text-sm mx-2">0xBC45647eA89...739FA2485F0</span>
                    <button onClick={handleCopy} className="text-gray-400 hover:text-white flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 7.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                        </svg>
                        {copied && <span className="ml-2 text-green-400">Copied!</span>}
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-black text-white py-2 px-4 rounded-lg flex justify-center items-center hover:bg-white hover:text-black transition-colors">
                        <span>OKX DEX</span>
                    </button>
                    <button className="bg-black text-white py-2 px-4 rounded-lg flex justify-center items-center hover:bg-white hover:text-black transition-colors">
                        <span>DEX SCREENER</span>
                    </button>
                    <button className="bg-black text-white py-2 px-4 rounded-lg flex justify-center items-center hover:bg-white hover:text-black transition-colors">
                        <span>COIN GECKO</span>
                    </button>
                    <button className="bg-black text-white py-2 px-4 rounded-lg flex justify-center items-center hover:bg-white hover:text-black transition-colors">
                        <span>COIN MARKET</span>
                    </button>
                </div>
                <img
                    src={bowl}
                    alt="Bent Bowl"
                    className="absolute -bottom-16 -left-11 lg:-bottom-9  lg:-left-14 transform translate-x-1/2 -translate-y-1/2 w-16 h-16"
                />
            </div>
        </div>
    );
};

export default TreatComponent;
