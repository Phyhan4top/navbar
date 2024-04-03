import React from "react";
import ImageHolder from "../Image Holder/ImageHolder";

const RelatedProdCard = ({obj}) => {
  
  return (
    <div className="h-[247px] w-[322px] flex flex-col justify-start items-start gap-3">
      <ImageHolder images={obj.images} />
      <div className="h-[49px] w-full flex flex-col justify-start items-start gap-[6px]">
        <p className="text-[16px] text-[#000] text-left font-bold font-[DMSans]">
          {obj.summary}
        </p>
        <div className="flex gap-[6px] justify-start">
          <p className="font-[500] text-[#000] text-left text-[16px]">
            {obj.price}
          </p>
          <p className="border-[1px] rounded-[4px] border-[#dcdcdc] text-center py-[2px] px-2 text-[14px] font-[500] text-[#000]">
            {obj.condition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProdCard;
