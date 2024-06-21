"use client";

import Footer from "./Footer";
import Header from "./Header";
import ScrollBtn from "./ScrollBtn";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primaryColor text-white font-bodyFont relative overflow-hidden">
      <Header />
      {children}
      <div className="fixed top-[90vh]  right-6">
        <ScrollBtn />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
