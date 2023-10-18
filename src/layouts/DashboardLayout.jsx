import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";
import styles from "./dashboardLayout.module.css";

const DashboardLayout = () => {
  const [isAsideHidden, setIsAsideHidden] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsAsideHidden(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.dashboardLayout} divide-x `}>
      <div className="col-span-2 row-span-1">
        <Header />
      </div>
      {!isAsideHidden && (
        <aside className="row-start-2 row-span-4 h-screen md:block">
          <Sidebar />
        </aside>
      )}
      <main
        className={`col-start-${
          isAsideHidden ? "1" : "2"
        } md:col-span-1 col-span-2 h-screen bg-[#F9F9FE]`}
      >
        <Outlet />
      </main>
      {/* <div className="col-span-2">
        <Footer />
      </div> */}
    </div>
  );
};

export default DashboardLayout;
