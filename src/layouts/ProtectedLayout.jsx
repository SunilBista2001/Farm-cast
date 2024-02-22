import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProtectedLayout = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
