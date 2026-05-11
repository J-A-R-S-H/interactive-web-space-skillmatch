"use client";

import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-10 bg-[#F9F6EE] leading-none">
      <div className="flex items-center gap-3 max-w-max">
        <div className="relative h-10 flex items-center bg-[#1A1A1A] rounded-l-lg pl-2 pr-10">
          <div className="bg-[#FF5F2E] !w-7 !h-7 rounded-md flex items-center justify-center mr-3 shrink-0">
            <span className="font-black text-black !text-sm italic !leading-none">
              N
            </span>
          </div>

          <div className="flex items-center gap-4 whitespace-nowrap">
            <button className="bg-[#333333] text-white px-3 py-1.5 rounded-lg !text-[10px] font-bold uppercase tracking-tight">
              Project
            </button>
            <span className="text-gray-400 !text-[10px] font-bold cursor-pointer hover:text-white uppercase tracking-tight">
              Navigators
            </span>
            <span className="text-gray-400 !text-[10px] font-bold cursor-pointer hover:text-white uppercase tracking-tight">
              Rewards
            </span>
            <span className="text-gray-400 !text-[10px] font-bold cursor-pointer hover:text-white uppercase tracking-tight">
              FAQ
            </span>

            <div className="h-3 w-[1px] bg-gray-700 mx-1" />

            <div className="flex items-center gap-1 text-gray-400 !text-[10px] font-bold cursor-pointer hover:text-white uppercase tracking-tight">
              Products
              <svg
                className="w-2 h-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div
            className="absolute right-0 top-0 h-full w-6 translate-x-full bg-[#1A1A1A]"
            style={{ clipPath: "polygon(0 0, 0% 100%, 100% 50%)" }}
          />
        </div>

        <button className="h-10 bg-[#C4FF61] hover:bg-[#b5f04a] text-black font-black !text-[10px] px-5 rounded-full border-2 border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider whitespace-nowrap">
          Launch Game
        </button>
      </div>
    </div>
  );
};

export default Navbar;
