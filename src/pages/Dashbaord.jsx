import FarmCard from "../components/FarmCard.jsx";
import { Button, Image, useDisclosure } from "@chakra-ui/react";
import Farm1 from "../assets/f1.jpg";
import Farm2 from "../assets/f2.jpg";
import Farm3 from "../assets/f3.jpg";
import CustomModal from "../components/CustomModal.jsx";
import RainfallImg from "../assets/precipitation.png";
import TemperatureImg from "../assets/temperature.png";
import HumidityImg from "../assets/humidity.png";
import { useState } from "react";
import FarmTable from "../components/FarmTable.jsx";
import UserTable from "../components/UserTable.jsx";

const farmList = [
  {
    id: 1,
    title: "Farm 1",
    imgURl: Farm1,
    price: "Rs.1,00,000",
  },
  {
    id: 2,
    title: "Farm 2",
    imgURl: Farm2,
    price: "Rs.1,50,000",
  },
  {
    id: 3,
    title: "Farm 3",
    imgURl: Farm3,
    price: "Rs.50,000",
  },
];

const Dashbaord = () => {
  const {
    isOpen: isFarmModalOpen,
    onOpen: onFarmModalOpen,
    onClose: onFarmModalClose,
  } = useDisclosure();

  const [farmData, setFarmData] = useState(null);

  const [table, setTable] = useState("user");

  const onClickFarm = (data) => {
    onFarmModalOpen();
    setFarmData(data);
  };

  return (
    <div className="w-full my-12 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Here we show the dashboard based on the role */}

      {isFarmModalOpen && (
        <CustomModal
          isOpen={isFarmModalOpen}
          title={farmData.title}
          onClose={onFarmModalClose}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-center font-bold text-3xl">Farm Details</h2>
            <p className="text-center">
              The Rainfall in the farm is 100mm. The average rainfall in the
              region is 150mm. The farm is suitable for growing crops.
            </p>

            <div className="flex flex-wrap justify-between gap-8 items-center mb-4">
              <div className="flex items-center gap-4">
                <Image src={TemperatureImg} alt="Temperature" maxWidth={35} />
                <p>35°C</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src={HumidityImg} alt="Humidity" maxWidth={35} />
                <p>60%</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src={RainfallImg} alt="Rainfall" maxWidth={35} />
                <p>100mm</p>
              </div>
            </div>
          </div>
        </CustomModal>
      )}

      {/* User Dashboard  */}
      {/* <>
        <h1 className="text-center text-3xl font-extrabold">Dashboard</h1>
        <p className="text-center font-semibold mb-4">
          Welcome to the User dashboard
        </p>
        <div className="flex md:flex-row flex-col gap-8">
          {farmList.map((farm) => (
            <FarmCard
              key={farm.id}
              farm={farm}
              imageUrl={farm.imgURl}
              title={farm.title}
              formattedPrice={farm.price}
              onClickFarm={onClickFarm}
            />
          ))}
        </div>
      </> */}

      {/* Admin Dashboard */}
      <>
        <h1 className="text-center text-3xl font-extrabold">Dashboard</h1>
        <p className="text-center font-semibold mb-4">
          Welcome to the Admin dashboard
        </p>
        <div className="flex justify-end gap-4">
          <Button onClick={() => setTable("user")} colorScheme="teal">
            Show User Table
          </Button>
          <Button onClick={() => setTable("farm")} colorScheme="green">
            Show Farm Table
          </Button>
        </div>

        {table === "user" ? <UserTable /> : <FarmTable />}
      </>
    </div>
  );
};

export default Dashbaord;
