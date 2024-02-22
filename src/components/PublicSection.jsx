/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Button } from "@chakra-ui/react";
import Temperature from "../assets/temperature.png";
import Humidity from "../assets/humidity.png";
import Rain from "../assets/precipitation.png";
import { Link } from "react-router-dom";

const AboutImages = ({ title, img, description }) => {
  return (
    <div className="flex flex-col gap-2 items-center md:w-1/3 w-full">
      <img
        src={img}
        alt=""
        className="w-20 aspect-square bg-teal-200 p-4 rounded-full object-contain"
      />
      <span className="font-bold">{title}</span>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Testimonials = ({ name, rating }) => {
  return (
    <div className="h-44 flex flex-col justify-between p-4 rounded-md bg-teal-100 md:w-1/3 w-full">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
        accusamus architecto. Esse?
      </p>
      <div className="flex items-center justify-between">
        <div className="flex">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <div className="flex flex-col ml-2">
            <span className="font-bold">{name}</span>
            <span className="text-sm text-gray-600">Customer</span>
          </div>
        </div>
        <span className="flex items-center gap-x-1 font-medium">
          <StarIcon color={"black"} /> {rating}
        </span>
      </div>
    </div>
  );
};

export const PublicSection = () => {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex items-center justify-center h-[90vh] relative">
        {/* Image Container */}
        <div className="relative w-full bg-gradient-to-b from-green-500 to-gray-300 rounded-md md:rounded-[80px] h-[70vh]">
          <div className="absolute w-full md:inset-0 flex flex-col-reverse my-2 sm:my-4 md:my-0 md:flex-row justify-between items-center px-4 sm:px-8 md:px-12 gap-2 sm:gap-4 md:gap-8 ">
            <div className="flex flex-col gap-4  text-white">
              <h1 className="md:text-5xl sm:text-2xl text-xl font-extrabold">
                Harvesting Hopes, Cultivating Dreams
              </h1>
              <p className="font-semibold text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum, ut reiciendis! Quod, provident atque.
              </p>
              <Link to="/signup">
                <Button
                  colorScheme="teal"
                  width={"fit-content"}
                  variant="solid"
                >
                  Get Started
                </Button>
              </Link>
            </div>
            <img
              src="src/assets/p1.jpg"
              alt="main-jpg"
              className="w-fit max-h-80 object-contain brightness-90 rounded-md "
            />
          </div>
        </div>
      </div>

      <div id="aboutUs" className="my-12">
        {/* About Us */}
        <div className="text-center flex-col flex  items-center justify-center space-y-1">
          <h1 className="text-2xl font-bold ">About Us</h1>
          <p className="text-base text-gray-600 font-medium">
            Order now and appreciate beauty of nature
          </p>
        </div>
        {/* About Images */}
        <div className="flex flex-col my-12 sm:flex-row gap-4 sm:gap-8 md:gap-12">
          <AboutImages
            title={"Temperature"}
            img={Temperature}
            description={"Ideal growth conditions – Check temperature"}
          />
          <AboutImages
            title={"Humidity"}
            img={Humidity}
            description={"Manage plant moisture – Monitor humidity."}
          />
          <AboutImages
            title={"Rainfall"}
            img={Rain}
            description={"Plan irrigation wisely – Check rainfall."}
          />
        </div>
      </div>

      <div id="testimonials" className="my-8">
        {/* Testimonials */}
        <h1 className="text-2xl font-bold ">
          What customers say about Farm Cast ?
        </h1>
        <div className="my-8 flex flex-col md:flex-row  gap-2 sm:gap-4 md:gap-8">
          <Testimonials name={"Samragyi Shah"} rating={4.5} />
          <Testimonials name={"Sunil Bista"} rating={4.5} />
          <Testimonials name={"Riddhi Saud"} rating={4.8} />
        </div>
      </div>
    </div>
  );
};
