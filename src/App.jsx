import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Darshboard from "./components/Darshboard";
import Country from "./components/Country";
import Info from "./components/Info";

import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [mode, setMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={mode ? "dark" : undefined}>
        <div className="bg-lightBg dark:bg-darkBg h-full min-h-screen">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Darshboard />} />
              <Route path="/:id" element={<Country />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
