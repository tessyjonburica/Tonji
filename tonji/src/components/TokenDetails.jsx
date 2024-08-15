import React from "react";
import mint from '../assets/dog-sign.png';
import bowl from '../assets/bowl.png';
import burnt from '../assets/lp.png';


const Tokenomics = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center tonjibg">
      <div
        className="text-white rounded-lg shadow-lg p-8 max-w-lg mx-auto text-center"
        style={{ backgroundColor: "#1D1C18" }}
      >
        <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
        <p className="mb-8">
          Tonji boasts a straightforward tokenomic structure, built to endure for eternity. Just like the timeless legacy of ancient Egypt, $TONJI is poised to withstand the sands of time.
        </p>
        <div className="flex justify-around items-center space-x-4">
          <div className="flex flex-col items-center">
            <img src={burnt} alt="LP Burnt" className="w-12 h-12 mb-2" />
            <span>LP Burnt</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={bowl} alt="0% Tax" className="w-12 h-12 mb-2" />
            <span>0% Tax</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={mint} alt="Mint revoked" className="w-12 h-12 mb-2" />
            <span>Mint revoked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
