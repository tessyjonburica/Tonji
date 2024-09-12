import React from 'react';
import '../index.css';
import Egyptdog from '../assets/Egypt Benji.png';
import borderFrame from '../assets/iframeM.png';
import tonjisign from '../assets/tonji-sign.png';

function History() {
    return (
        <section className="bg-[#1D1C18] flex flex-col items-center justify-between relative ">
            <img src={borderFrame} alt="background frame" className="w-full object-cover" />

            <div className="flex flex-col md:flex-row items-center justify-between px-6  w-full max-w-6xl border min-h-[982px] border-white">
                <div className="text-white md:text-left md:w-1/2 mb-10 md:mb-0 md:mr-10">
                    <h3 className="font-inter font-semibold lg:text-5xl text-[32px] mb-4">The Dog of Ton Chain</h3>
                    <p className="font-inter font-normal lg:text-2xl text-base">
                        Tonjis: Unrivaled intelligence, charm, and adventure in one.
                    </p>
                </div>
                <div className="md:w-[650.66px] flex justify-center tondogCon">
                    <img src={Egyptdog} alt="Egyptian Dog" className="tondog" />
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 w-full max-w-6xl border min-h-[982px] border-white">
                {/* Image Section */}
                <div className="flex justify-center md:max-w-[650px] lg:max-w-[55%] my-6 md:mb-0">
                    <img src={tonjisign} alt="tonjisign" className="w-3/4 md:w-full object-contain" />
                </div>

                {/* Text Section */}
                <div className="text-white md:text-left md:max-w-[50%] lg:max-w-[45%]">
                    <p className="font-inter font-semibold lg:text-[49px] text-[32px]">An Ancient History</p>
                    <p className="font-inter font-normal mb-4">
                        The Tonji's history in Ancient Egypt dates back thousands of years, where they were revered as companions to pharaohs and depicted in ancient hieroglyphics. Known for their intelligence and hunting prowess, Tonjis were prized for their ability to assist in tracking and capturing game in the Egyptian desert.
                    </p>
                    <button className="bg-transparent border border-white text-white rounded-lg px-6 py-2 hover:bg-white hover:text-black transition">
                        BUY $TONJI
                    </button>
                </div>
            </div>

            <img src={borderFrame} alt="bottom image frame" className="w-full object-cover" />
        </section>

    );
}

export default History;
