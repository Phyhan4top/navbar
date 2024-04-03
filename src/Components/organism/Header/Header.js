import React from "react";
import {
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import NavList from "../../molecules/Flex items/NavList";
import CButton from "../../atoms/Buttons/LinkButton";
import MobileView from "../Mobile/MobileView";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import Button from "../../atoms/Buttons/Button";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-[1512px] h-[80px]  text-black mt-5 px-4 py-2 lg:px-8 lg:py-4 border-[#dcdcdc] border-[2px]">
      <div className="container max-w-[1348px] mx-auto flex items-center justify-between text-2xl">
        <div>
          <img src="/images/Logo.png" alt="logo" className="w-[57.8px] h-[25.3px]" />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden lg:block">
          <img src="/images/User.png" alt="user" />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileView openNav={openNav} />
    </Navbar>
  );
}
