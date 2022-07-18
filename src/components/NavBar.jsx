import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import ThemeContext from "../context/ThemeContext";

const NavBar = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const changeMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <nav className="flex justify-between py-5 px-10 shadow-md bg-lightBg dark:bg-darkElements ">
      <Link to="/">
        <h2 className="font-bold dark:text-darkText">Where in the world?</h2>
      </Link>

      <div className="flex ">
        <Link to="/info" className="pr-4 dark:text-darkText">
          More Info
        </Link>

        <button className="dark:text-darkText" onClick={changeMode}>
          {mode ? (
            <div className="flex justify-center items-center gap-2">
              <BsFillSunFill /> Light Mode
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <BsFillMoonFill /> Dark Mode
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
