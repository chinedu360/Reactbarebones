// Import necessary modules and components
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import { Header } from "./../components/index"; // Import the Header component
import styles from "./HomeLayout.module.css"; // Import styles for HomeLayout

const HomeLayout = () => {
  return (
    <div className={styles.HomeLayout}>
      {/* Apply styles to the outer container */}
      <div className="col-span-1 row-span-1 " style={{ background: "red" }}>
        <Header /> {/* Render the Header component */}
      </div>
      <main className="col-span-1 flex justify-center items-center">
        <Outlet /> {/* Render the content inside the Outlet (nested routes) */}
      </main>
    </div>
  );
};

export default HomeLayout; // Export the HomeLayout component for use in the application
