import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainBavigation";

const RootLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
