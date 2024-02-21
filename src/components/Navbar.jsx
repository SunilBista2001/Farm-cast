import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between bg-transparent items-center px-4 sm:px-8 md:px-12 lg:px-20 ">
      <Link to="/" className="flex  items-center text-2xl font-bold">
        <img
          src="src/assets/logo.png"
          alt=""
          className="w-24 h-24 object-contain"
        />{" "}
        Farm Cast
      </Link>
      <ul className="right flex items-center gap-4 font-medium">
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
    </div>
  );
};

export default Navbar;
