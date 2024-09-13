import React from "react";
import mint from '../assets/dog-sign.png';
import bowl from '../assets/bowl.png';
import burnt from '../assets/lp.png';


const Tokenomics = () => {
  return (
    <div className="bg-black min-h-[982px] flex items-center justify-center tonjibg">
      <div
        className="text-white rounded-lg shadow-lg p-8 max-w-lg  mx-3  border border-[#423f36]"
        style={{ backgroundColor: "#1D1C18" }}
      >
        <h2 className=" text-[32px] md:text-[49px] font-bold text-center mb-4">Tokenomics</h2>
        <p className="mb-8 text-[16px] text-center md:text-[20px] px-2">
          Tonji boasts a straightforward tokenomic structure, built to endure for eternity. Just like the timeless legacy of ancient Egypt, $TONJI is poised to withstand the sands of time.
        </p>
        <div className="flex flex-wrap justify-around items-center space-y-4">
          <div className="flex flex-col items-center w-1/2 sm:w-1/3">
            <img src={burnt} alt="LP Burnt" className="w-12 h-12 mb-2" />
            <span>LP Burnt</span>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3">
            <img src={bowl} alt="0% Tax" className="w-12 h-12 mb-2" />
            <span>0% Tax</span>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img src={mint} alt="Mint revoked" className="w-12 h-12 mb-2" />
            <span>Mint revoked</span>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Tokenomics;
