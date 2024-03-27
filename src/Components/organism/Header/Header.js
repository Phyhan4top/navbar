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
    <Navbar className="mx-auto max-w-[2000px] mt-5 px-4 py-2 lg:px-8 lg:py-4 bg-[#149bfc] text-white">
      <div className="container max-w-[1536px] mx-auto flex items-center justify-between text-2xl">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faDumbbell}
            style={{ fontSize: "50px", rotate: "90deg" }}
          />
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-3xl"
          >
            Symbol
          </Typography>
        </div>

        <div className="hidden lg:block">
          <SearchBar />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden lg:block">
          <Button
            className={
              "w-[140px] h-[47px] bg-white text-[#149bfc] font-[Inter] flex items-center justify-center px-32px py-16px"
            }
          >
            Buy Now
          </Button>
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
