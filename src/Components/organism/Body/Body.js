import React from "react";
import PriceCTA from "../../molecules/Price CTA/PriceCTA";
import DetailsCTA from "../../molecules/Details CTA/DetailsCTA";
import VendorDetails from "../../atoms/Vendor  Details/VendorDetails";
import ProdView from "../../atoms/Product view/ProdView";
import ReviewHeader from "../../atoms/Review Header/ReviewHeader";
import Reviews from "../../molecules/Reviews/Reviews";
import RelatedProd from "../../molecules/Related Product/RelatedProd";
import Footer from "../../atoms/Footer/Footer";

const Body = () => {
  return (
    <div className="container mx-auto max-w-[1348px] flex flex-col gap-6 mt-10">
      <ProdView />
      <div className="gap-3 flex justify-between">
        <DetailsCTA />
        <PriceCTA />
      </div>
      <div className="flex justify-center items-center w-full">
        <VendorDetails />
      </div>
      <ReviewHeader />
      <Reviews />
      <RelatedProd />
      <Footer/>
    </div>
  );
};

export default Body;
