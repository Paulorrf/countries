import { useState } from "react";

import CountriesDisplay from "./CountriesDisplay";

import { AiOutlineSearch } from "react-icons/ai";

const Darshboard = () => {
  const [region, setRegion] = useState("Americas");
  const [getCountry, setGetCountry] = useState("");

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between px-10 mt-8 ">
        <div className="flex h-14 p-4 bg-commomElements dark:bg-darkElements w-full md:w-96 shadow-md rounded-md items-center">
          <div className="mr-6 text-lightText dark:text-lightBg">
            <AiOutlineSearch />
          </div>
          <div className="h-6 ">
            <input
              type="text"
              placeholder="Search for a country..."
              className="outline-none w-80 text-lightText placeholder:text-lightText dark:text-lightBg dark:placeholder:text-lightBg"
              // the standard tailwind colors were changes, so to not need to inherit all the colors
              // I just wrote a inline style
              style={{ backgroundColor: "transparent" }}
              onChange={(e) => setGetCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="h-14 flex items-center shadow-md bg-commomElements dark:bg-darkElements rounded-md text-lightBg cursor-pointer w-48 justify-center mt-8 md:mt-0 lg:mt-0">
          <select
            name="regions"
            className="bg-commomElements dark:bg-darkElements text-lightText dark:text-darkText cursor-pointer py-4"
            onClick={(e) => setRegion(e.target.value)}
          >
            <option hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="lg:pt-8">
        <CountriesDisplay region={region} getCountry={getCountry} />
      </div>
    </div>
  );
};

export default Darshboard;
