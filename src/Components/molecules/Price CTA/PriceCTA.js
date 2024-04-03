import React from "react";
import Negociation from "../../atoms/Price Summary/Negociation";
import SafeTips from "../../atoms/Price Summary/SafeTips";

const PriceCTA = () => {
  return (
    <div className="flex flex-col justify-center bg-[#fafafa] w-[480px] gap-8 items-center py[56px] px h-[803px] rounded-[32px]">
      <Negociation />
      <SafeTips />
      <button className="bg-[#fdc174] w-[390px] flex justify-center items-center gap-1 rounded-lg  text-lg font-[500] text-center font-[DMSans] text-[#292929] py-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M4 20.5C4.83 21.33 6.17 21.33 7 20.5L20 7.5C20.83 6.67 20.83 5.33 20 4.5C19.17 3.67 17.83 3.67 17 4.5L4 17.5C3.17 18.33 3.17 19.67 4 20.5Z"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.51 8.98999L15.51 5.98999"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 2.44L10.5 2L10.06 3.5L10.5 5L9 4.56L7.5 5L7.94 3.5L7.5 2L9 2.44Z"
            stroke="#212121"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 8.44L6.5 8L6.06 9.5L6.5 11L5 10.56L3.5 11L3.94 9.5L3.5 8L5 8.44Z"
            stroke="#212121"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 13.44L21.5 13L21.06 14.5L21.5 16L20 15.56L18.5 16L18.94 14.5L18.5 13L20 13.44Z"
            stroke="#212121"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Post Ad</p>
      </button>
    </div>
  );
};

export default PriceCTA;
