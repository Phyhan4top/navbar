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
        </div>
      </MobileNav>
    </div>
  );
};

export default MobileView;
