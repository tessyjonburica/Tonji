import React from 'react';
import '../index.css';
import DogImage from '../assets/benjidog.png';
import { RiTwitterXFill } from "react-icons/ri";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-8 px-4 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center">

                {/* Partners List and Social Icons Section */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-1/3 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">Partners</h3>
                        <ul className="space-y-2">
                            <li>CoinMarketCap</li>
                            <li>Tonji Shiba Charity</li>
                            <li>LBank</li>
                            <li>Poloniex</li>
                            <li>BitMart</li>
                            <li>CoinGecko</li>
                        </ul>
                    </div>
                    <div className="flex items-start space-x-4 mt-4 md:mt-0">
                        <button className="bg-[#2C2A24] p-2 rounded">
                            <RiTwitterXFill className="text-xl md:text-2xl" />
                        </button>
                        <button className="bg-[#2C2A24] p-2 rounded">
                            <PiTelegramLogoLight className="text-xl md:text-2xl" />
                        </button>
                        <button className="bg-[#2C2A24] p-2 rounded">
                            <RxDiscordLogo className="text-xl md:text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Divider for desktop view */}
                <div className="my-4 md:my-0 md:border-l border-gray-700 h-24 hidden md:block"></div>

                {/* Logo and Image Section */}
                <div className="relative flex items-center justify-center w-full md:w-2/3 mt-8 md:mt-0">
                    <div className="text-center text-[40vw] md:text-[281.83px] font-normal opacity-75 tracking-wide font-mooLahLah w-full">
                        Tonji
                    </div>
                    <img
                        src={DogImage}
                        alt="Tonji Dog"
                        className="absolute w-[60vw] h-[60vw] md:w-[454px] md:h-[472px] flex-shrink-0"
                    />
                </div>
            </div>
{/*           
            <div className="mt-8 border-t border-gray-400 pt-4 flex justify-center items-center text-sm">
                <span>&copy; {currentYear} Tonji. All Rights Reserved. Built with Teslim</span>
            </div> */}
        </footer>
    );
};

export default Footer;
