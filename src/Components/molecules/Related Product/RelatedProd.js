import React from "react";
import RelatedProdCard from "../../atoms/Product Card/RelatedProdCard";

const RelatedProd = () => {
  const obj = [
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
    {
      images: ["car view 1.png", "car view 2.png"],
      price: "₦ 19,500.00",
      summary: "Tent-style Mosquito Net With Poles",
      condition: "Brand New",
    },
  ];
  return (
    <div className="h-[640px] w-full flex flex-col py-[24px] gap-6">
      <h1 className="font-bold text-left text-[21.3px] text-[#292929] font-[DMSans] ">
        Related Products
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-10">
        {obj.map((el, index) => {
          return <RelatedProdCard obj={el} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProd;
