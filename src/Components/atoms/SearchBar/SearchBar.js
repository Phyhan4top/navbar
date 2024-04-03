import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchBar = () => {
 const [re,setRe]= useState("")
  return (
    <div className="relative w-[400px] h-[48px] text-center">
      <input
        type="search"
        placeholder="Search anything"
        className="w-full h-full pl-10 pr-4 rounded-[12px] focus:outline-none focus:border-blue-500 border-[#dcdcdc] border-[2px]"
        onKeyDown={(e) => setRe(e.target.value)}
      />
      <div
        className={`absolute inset-y-0 flex items-center pl-3 gap-5 ${
          re === "" || null ? "block" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M12.375 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zM22.875 22l-2-2"
            stroke="#5D5D5D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
