import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Navbar } from "./components";
import { Home, Projects, Bookmarks } from "./pages";

function App() {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => setMenu(!menu);
  
  return (
    <Router>
      <div className="w-full min-h-screen relative">
        <div className="container flex gap-3 pt-6 pb-5">
        <Header handle={handleMenu} />
        </div>
        <nav
          className={`fixed top-0  ${
            menu ? "-right-full" : "right-0"
          } w-fit h-screen px-4 py-6 bg-white shadow-2xl transition-all duration-500 z-50`}
        >
        <Navbar handle={handleMenu} />
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
        <div className="container px-8 pb-10">
          <div className="flex flex-col gap-5 pt-6 border-t border-profile">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
