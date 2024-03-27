import React from "react";
import { MobileNav } from "@material-tailwind/react";
import NavList from "../../molecules/Flex items/NavList";
import CButton from "../../atoms/Buttons/LinkButton";
import Button from "../../atoms/Buttons/Button";
const MobileView = ({ openNav }) => {
  return (
    <div>
      <MobileNav open={openNav}>
        <div className="container mx-auto text-xl mt-3">
          <NavList />
          <Button
            className={
              "w-[140px] h-[47px] bg-white text-[#149bfc] font-[Inter] flex items-center justify-center px-32px py-16px"
            }
          >
            Buy Now
          </Button>
        </div>
      </MobileNav>
    </div>
  );
};

export default MobileView;
