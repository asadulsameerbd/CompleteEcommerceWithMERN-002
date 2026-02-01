import React from "react";
import Header from "../Components/Common/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Common/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Header />

      {/* main content */}
      <main className="min-h-130">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
