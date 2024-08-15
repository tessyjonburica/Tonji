import React from 'react';
import '../index.css';
import Egyptdog from '../assets/Egypt Benji.png';
import borderFrame from '../assets/iframeM.png';
import tonjisign from '../assets/tonji-sign.png';

function History() {
    return (
        <section className="bg-[#1d1c18] flex flex-col items-center justify-between relative border-2 border-white">
            <img src={borderFrame} alt="background frame" className="w-full object-cover" />

            <div className="flex flex-col md:flex-row items-center justify-between p-6 mt-12 mb-12 w-full max-w-5xl">
                <div className="text-white md:text-left md:w-1/2 mb-10">
                    <h3 className="font-montserrat font-bold lg:text-3xl text-2xl mb-4">The Dog of Ton Chain</h3>
                    <p className="font-montserrat font-medium lg:text-lg text-base">
                        Tonjis: Unrivaled intelligence, charm, and adventure in one.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={Egyptdog} alt="Egyptian Dog" className="tondog" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between p-6 mb-12 w-full max-w-5xl">
                <div className='md:w-1/2 flex justify-center mb-6 '>
                    <img src={tonjisign} alt="tonjisign" className="w-3/4 md:w-full object-contain" />
                </div>
                <div className='md:w-1/2 text-white'>
                    <p className='text-lg font-inter font-semibold mb-4'>An Ancient History</p>
                    <p className='font-inter font-normal mb-4'>
                        The Tonji's history in Ancient Egypt dates back thousands of years, where they were revered as companions to pharaohs and depicted in ancient hieroglyphics. Known for their intelligence and hunting prowess, Tonjis were prized for their ability to assist in tracking and capturing game in the Egyptian desert.
                    </p>
                    <button className='bg-transparent border border-white text-white rounded-lg px-6 py-2 hover:bg-white hover:text-black transition'>
                        BUY $TONJI
                    </button>
                </div>
            </div>

            <img src={borderFrame} alt="bottom image frame" className="w-full object-cover" />
        </section>
    );
}

export default History;
