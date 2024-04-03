import React from 'react'

const Platinum = () => {
  return (
    <div className="Z-10 absolute left-4 bottom-4 flex bg-[#fefefe] items-center justify-center w-[96px] h-[24px] gap-[6px] rounded-md py-1 px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M15.4286 6.28578L8.00001 14.2858L0.571442 6.28578M15.4286 6.28578L12 1.71436H4.00001L0.571442 6.28578M15.4286 6.28578H0.571442"
          stroke="#151515"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.00003 1.71436L8.00003 6.28578M8.00003 6.28578L12 1.71436M8.00003 6.28578V14.2858"
          stroke="#151515"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.00003 2.3335V6.3335L8.00003 13.6668L12 6.3335V2.3335"
          stroke="#151515"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-[14px] font-[500] text-[#292929]">Platinum</p>
    </div> 
  );
}

export default Platinum
