import React from "react";
import ImageCount from "../Platinum Tag/ImageCount";
import Platinum from "../Platinum Tag/Platinum";
const ProdView = () => {
  const images = [
    "car view 2.png",
    "car view 4.png",
    "car view 1.png",
    "car view 3.png",
  ];
  return (
    // <div className="flex justify-between w-full gap-2">
    //   <div className="relative">
    //     <img
    //       src="images/mainCar.png"
    //       alt="prod"
    //       className="w-[664px] h-[385px]"
    //     />
    //     <Platinum/>
    //   </div>
    //   <div className="grid grid-cols-2 gap-2">
    //     {images.map((el) => {
    //       return (
    //         <img
    //           src={`images/${el}`}
    //           alt={el}
    //           className="w-[333px] h-[188.4px]"
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-[385px] relative">
      <img
        className="row-span-2 col-span-2 w-[664px] h-[385px]"
        src="images/mainCar.png"
        alt="prod"
      />
      <Platinum />
      <ImageCount images={images}/>
      {images.map((el) => {
        return (
          <img
            src={`images/${el}`}
            alt={el}
            className="w-[333px] h-[188.4px]"
          />
        );
      })}
    </div>
  );
};

export default ProdView;
