import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-20 flex justify-between bg-gray-50 shadow-md items-center px-4 sm:px-8 md:px-12 lg:px-20 ">
      <Link to="/" className="flex  items-center text-xl md:text-2xl font-bold">
        <img
          src="src/assets/logo.png"
          alt=""
          className="w-24 h-24 object-contain"
        />{" "}
        Farm Cast
      </Link>

      <ul className="hidden md:flex right  items-center gap-4 font-medium">
        <a href={"/"} className="cursor-pointer">
          Home
        </a>
        <a href={"#aboutUs"} className="cursor-pointer">
          About Us
        </a>
        <a href={"#testimonials"} className="cursor-pointer">
          Testimonials
        </a>
        <Link to="/signup">
          <Button colorScheme="teal" variant="solid">
            Sign Up
          </Button>
        </Link>
      </ul>

      {!open ? (
        <div
          className="md:hidden block z-40 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <HamburgerIcon />
        </div>
      ) : (
        <div
          className="md:hidden block z-40 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <CloseIcon color={"white"} />
        </div>
      )}
      {open && (
        <ul className="fixed w-screen h-screen bg-gradient-to-b from-green-500 to-gray-300 z-30 inset-0 justify-center items-center text-2xl gap-8 flex flex-col">
          <Link
            to={"/"}
            onClick={() => setOpen(!open)}
            className="hover:font-bold"
          >
            Home
          </Link>
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer hover:font-bold"
          >
            About Us
          </li>
          <li className="cursor-pointer hover:font-bold">Testimonials</li>
          <Link
            to="/signup"
            className="hover:font-bold"
            onClick={() => setOpen(!open)}
          >
            Sign Up
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
