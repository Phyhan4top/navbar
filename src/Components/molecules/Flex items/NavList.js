import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../atoms/SearchBar/SearchBar";

const NavList = () => {
  return (
    <div>
      <ul className="mt-2 mb-4 flex flex-col justify-between gap-2 w-[1024px]  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center font-[500] text-[16px] text-[#292929] font-[DMSans]"
          >
            Vendors
          </a>
        </Typography>

        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center font-[500] text-[16px] text-[#292929] font-[DMSans]"
          >
            Promotes
          </a>
        </Typography>
        <div className="hidden xl:block">
          <SearchBar />
        </div>

        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center font-[500] text-[16px] text-[#292929] font-[DMSans]"
          >
            Jobs
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center font-[500] text-[16px] text-[#292929] font-[DMSans]"
          >
            Find Talents
          </a>
        </Typography>
      </ul>
    </div>
  );
};

export default NavList;
