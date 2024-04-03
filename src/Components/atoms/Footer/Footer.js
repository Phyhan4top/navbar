import React from 'react'

const Footer = () => {
  return (
    <div className="font-[DMSans] max-w-[1348px] flex flex-col justify-center items-center gap-6 py-8 w-full h-[202px]">
      <h1 className="text-[28.4px] font-bold text-left text-[#292929]">
        There's more to explore
      </h1>
      <p className="text-[16px] font-normal text-center text-[#656565]">
        Shop 67 stores (and counting) in Ikoyi Lagos.
      </p>
      <button className="text-[16px] font-[500] text-center text-[#292929] border-[#dcdcdc] border-[1px] w-[122px] h-[42px] rounded-[8px] p-2">
        Visit all stores
      </button>
    </div>
  );
}

export default Footer
