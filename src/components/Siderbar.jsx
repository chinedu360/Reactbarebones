import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdClear, MdDashboard, MdListAlt } from "react-icons/md";

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleDashBoard = () => {
    navigate("/dashboard");
    // onClose();
  };

  const handleVetTTracker = () => {
    navigate("/vetttracker");
    // onClose();
  };

  // const handleAnalytics = () => {
  //   navigate("/analytics");
  // };

  const name = "Chinedu"; //would come from an api
  const imageUrl = "";
  return (
    <div className="bg-[white] flex flex-col justify-between h-[100%] md:h-[90%]">
      <div className="mt-5 md:mt-0 ">
        {/* There is no need of having this here and in the Header */}
        <div className="cursor-pointer flex flex-row items-center md:hidden px-2">
          <div className="w-[100%] flex-col items-center flex">
            <div className="flex py-3">
              {imageUrl ? (
                <img
                  src={imageUrl}
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
          <div onClick={onClose}>
            <MdClear size={30} />
          </div>
        </div>
        <nav className="w-[100%] flex flex-col items-center justify-center space-y-4 pt-6">
          <div
            className="w-[100%] flex flex-row py-2 items-center cursor-pointer hover:bg-[pink] hover:text-white justify-center"
            onClick={handleDashBoard}
          >
            {/* <img src={dashboardicon} alt="" className="mx-2" />{" "} */}
            <MdDashboard size={25} />
            <div className="mx-2">Dashboard</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
