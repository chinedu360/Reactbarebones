import { useDispatch } from "react-redux";
import PropTypes from "prop-types"; // Fixed import
// import Buttonx from "./common/Buttonx";
// import { useNavigate } from "react-router-dom";
import Sidebar from "./Siderbar";
import { useState } from "react";
import { MdSubject, MdOutlineNotifications } from "react-icons/md";

const Header = () => {
  //   const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const name = "Chinedu"; //would come from an api
  const imageUrl = "";
  return (
    <div
      //   onClick={handleOutsideClick}
      className={`items-center flex sm:flex-row justify-between sm:items-center bg-white fixed top-0 left-0 right-0 z-30 border-b`}
    >
      <div className="flex items-center justify-center z-10 relative">
        {/* logo can go here */}
        {/* <a>
          <img src={Logo} className="h-20 p-5" alt="theCultiverly logo" />
        </a> */}
        <span
          className="cursor-pointer md:hidden block"
          onClick={toggleSidebar}
        >
          <MdSubject size={25} />
        </span>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-80"
              onClick={toggleSidebar} // Close the sidebar when clicking the overlay
            ></div>
            {/* Sidebar */}
            <aside className="h-screen w-[80%] top-0 pl-9 z-20 fixed md:hidden">
              <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </aside>
          </>
        )}
      </div>

      <div className="flex flex-end space-x-2 pr-5">
        {/* Bell Notification Icon */}
        <div className="flex py-3 cursor-pointer">
          <div className="rounded-full h-10 w-10 bg-gray-100 flex justify-center items-center">
            <span className="text-white font-bold text-sm">
              <MdOutlineNotifications color="black" size={22} />
            </span>
          </div>
        </div>
        {/* Image Logo/User Initials */}
        <div className="w-[100%] flex-col items-center hidden md:flex">
          <div className="flex py-3">
            {imageUrl || "" ? (
              <img
                src={imageUrl || ""}
                alt="Profile"
                className="rounded-full h-10 w-10"
              />
            ) : (
              <div className="rounded-full h-10 w-10 bg-gray-300 flex justify-center items-center">
                <span className="text-white font-bold text-sm">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  privateHeaderStyle: PropTypes.string,
};

export default Header;
