import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Projects, Bookmarks } from "./pages";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <div className="container flex gap-3 pt-6 pb-5">
          <Header />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
        <div className="container px-10 pb-5">
          <div className="flex flex-col gap-5 pt-6 border-t border-profile">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
