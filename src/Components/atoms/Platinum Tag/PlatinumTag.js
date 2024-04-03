import React from 'react'

const PlatinumTag = () => {
  return (
    <div className="absolute top-3 left-4 w-[90%] justify-between items-center flex  z-10">
      <div className="flex bg-[#fefefe] items-center justify-center w-[96px] h-[24px] gap-[6px] rounded-md py-1 px-2">
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
        <p className='text-[14px] font-[500] text-[#292929]'>Platinum</p>
      </div>
      <svg
        className=" border-[#fff]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill='none'
      >
        <path
          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default PlatinumTag
