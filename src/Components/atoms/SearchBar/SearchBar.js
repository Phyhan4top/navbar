import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchBar = () => {
 const [re,setRe]= useState("")
  return (
    <div className="relative w-[500px] h-[50px] text-center">
      <input
        type="search"
        className="w-full h-full pl-10 pr-4 bg-[#45b1ff] rounded-4 focus:outline-none focus:border-blue-500 "
        onKeyDown={(e)=>setRe(e.target.value)}
      />
      <div className={`absolute inset-y-0 left-[15%] flex items-center pl-3 gap-5 ${re ==="" || null?"block":"hidden"}`}>
        <FontAwesomeIcon icon={faSearch} className="text-white" />
        <> Search for anything</>
       
      </div>
    </div>
  );
};

export default SearchBar;
