import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import { Home, Projects, Bookmarks } from "./pages";

function App() {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => setMenu(!menu);
  
  const [theme, setTheme] = useState('light')
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    const activeTheme = document.documentElement.setAttribute('class', theme)
    console.log("🚀 ~ file: App.jsx:13 ~ App ~ activeTheme:", activeTheme)
  }

  return (
    <Router>
      <div className="relative w-full min-h-screen dark:bg-dark">
        <div className="container flex gap-3 pt-6 pb-5">
          <Header handle={handleMenu} theme={handleTheme} />
        </div>
        <nav
          className={`fixed top-0  ${
            menu ? "-right-full" : "right-0"
          } w-fit h-screen px-4 py-6 bg-white shadow-2xl transition-all duration-500 z-50 dark:bg-dark`}
        >
          <Navbar handle={handleMenu} theme={handleTheme} />
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
        <div className="container px-8 pb-10 md:pb-5 lg:pb-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-5 pt-6 border-t border-profile md:gap-4 lg:flex-row lg:justify-between lg:items-end lg:gap-0 dark:border-grey/50">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
