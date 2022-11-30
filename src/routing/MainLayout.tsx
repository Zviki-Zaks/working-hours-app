import { NavLink, Outlet } from "react-router-dom";
import CustomTooltip from "../components/common/CustomTooltip";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import CustomMenu from "../components/common/CustomMenu";
import { logOut } from "../firebase/firebase.auth";

const AppHeader = () => {
  return (
    <div className="flex w-full justify-between bg-gray-300/25 px-8 py-4 shadow-sm">
      <CustomTooltip
        triggerElement={(onClick) => (
          <div
            onClick={onClick}
            className="flex h-8 w-8 cursor-pointer content-center items-center justify-center rounded-full bg-gray-300"
          >
            <FaUserAlt />
          </div>
        )}
      >
        <ul>
          <li>הפרופיל שלי</li>
          <li onClick={logOut}>התנתק</li>
        </ul>
      </CustomTooltip>
      <CustomMenu
        triggerElement={(onClick) => (
          <button
            onClick={onClick}
            className="flex h-8 w-8 content-center items-center justify-center rounded-md bg-gray-300"
          >
            <GiHamburgerMenu />
          </button>
        )}
      >
        <AppNav />
      </CustomMenu>
    </div>
  );
};

const AppNav = () => {
  return (
    <nav className="">
      <ul>
        <NavLink to={`/`}>Home</NavLink>
      </ul>
    </nav>
  );
};

const MainLayout = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default MainLayout;
