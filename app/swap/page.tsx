"use client";

import React, { useState } from "react";

const Swap = () => {
  // State for the two wallet selections
  const [payCurrency, setPayCurrency] = useState("USDT BNB");
  const [receiveCurrency, setReceiveCurrency] = useState("USDC AVAX");
  const [payAmount, setPayAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  // Function to swap the wallets
  const handleSwap = () => {
    setPayCurrency(receiveCurrency);
    setReceiveCurrency(payCurrency);
    setPayAmount(receiveAmount);
    setReceiveAmount(payAmount);
  };

  return (
    <main
      className="pt-0 p-3 pb-20 bg-black min-h-screen bg-repeat-y"
      style={{ backgroundImage: "url('/Rectangle.png')" }}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white text-center">
        Cross Chain Swap
      </h2>

      {/* Pay Wallet Section */}
      <div className="mt-6">
        <div className="flex justify-between text-white text-sm">
          <p>Use Debonk wallet?</p>
          <p>Balance: 1,2837.47</p>
        </div>
        <div className="flex justify-between items-center mt-3 bg-background p-3 rounded-lg">
          <input
            type="text"
            className="bg-background w-1/2 text-white text-lg outline-none"
            placeholder="0.00"
            value={payAmount}
            onChange={(e) => setPayAmount(e.target.value)}
          />
          <select
            value={payCurrency}
            onChange={(e) => setPayCurrency(e.target.value)}
            className="bg-background text-white text-lg outline-none"
          >
            <option>USDT BNB</option>
            <option>BTC BNB</option>
            <option>ETH BNB</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center my-6">
        <button
          onClick={handleSwap}
          className="text-accent text-3xl transform rotate-90 transition-transform duration-300 ease-in-out"
        >
          ⇌
        </button>
      </div>

      {/* Receive Wallet Section */}
      <div className="mt-2">
        <div className="flex justify-between items-center bg-background p-3 rounded-lg">
          <input
            type="text"
            className="bg-background w-1/2 text-white text-lg outline-none"
            placeholder="0.00"
            value={receiveAmount}
            onChange={(e) => setReceiveAmount(e.target.value)}
          />
          <select
            value={receiveCurrency}
            onChange={(e) => setReceiveCurrency(e.target.value)}
            className="bg-background text-white text-lg outline-none"
          >
            <option>USDC AVAX</option>
            <option>ETH AVAX</option>
            <option>BTC AVAX</option>
          </select>
        </div>
      </div>

      {/* Recipient Address */}
      <div className="mt-6">
        <input
          type="text"
          className="bg-background w-full p-3 text-white rounded-lg outline-none"
          placeholder="Recipient address"
        />
        <button className="text-accent mt-2">Paste</button>
      </div>

      {/* Fee Section */}
      <div className="mt-6 text-sm space-y-2 font-poppins font-light">
        <div className="flex justify-between w-full font-normal">
          <p>Fee</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Gas Cost</p>
          <p>0.00 BNB</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Estimated Time For Transfe</p>
          <p>0 Min</p>
        </div>
      </div>

      {/* Continue Button */}
      <button className="bg-gradient-to-r  from-[#0A6183] to-[#108FB9] w-full p-4 text-black font-poppins rounded-lg text-lg mt-20">
        Continue
      </button>
    </main>
  );
};

export default Swap;
