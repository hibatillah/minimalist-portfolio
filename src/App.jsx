import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import { Home, Projects, Bookmarks } from "./pages";

const App = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => setMenu(!menu);

  return (
    <Router>
      <div className="w-full min-h-screen dark:bg-neutral-900">
        <div className="container relative flex gap-3 pt-6 pb-5">
          <Header handle={handleMenu} />
          <nav
            className={`${
              menu
                ? "-right-full md:hidden"
                : "right-0 md:top-full md:-translate-y-6 md:-translate-x-1 lg:-translate-x-28"
            } fixed top-0 w-fit h-screen px-4 py-6 bg-white shadow-xl border border-profile dark:border-grey/30 transition-all duration-500 z-50 md:absolute md:h-fit md:px-3 md:rounded-lg dark:bg-dark`}
          >
            <Navbar handle={handleMenu} />
          </nav>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
        <div className="container px-8 pb-10 md:pb-5 lg:pb-8 lg:px-10 xl:px-28">
          <div className="flex flex-col gap-5 pt-6 border-t border-profile md:gap-4 lg:flex-row lg:justify-between lg:items-end lg:gap-0 dark:border-grey/50">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
