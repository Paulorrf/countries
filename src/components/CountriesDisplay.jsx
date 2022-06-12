import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../service/api";

import Spinner from "./Spinner";

const CountriesDisplay = ({ region, getCountry }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (getCountry !== "") {
      return;
    }

    if (region === "Filter by Region") {
      setIsLoading(false);
      return;
    }

    api
      .get("region/" + region)
      .then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [region, getCountry]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    if (getCountry === "") {
      setIsLoading(false);
      return;
    }
    api
      .get("name/" + getCountry)
      .then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [getCountry]);

  return !isLoading ? (
    <div className="mt-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 justify-items-center ">
        {countries.map((country) => {
          return (
            <div
              key={country?.name.common}
              className="bg-commomElements dark:bg-darkElements w-80 md:w-56 dark:text-darkText rounded-md shadow-lg"
            >
              <Link to={`/${country.name.common}`}>
                <img
                  src={country?.flags.png}
                  alt="flag"
                  className="h-44 md:h-36 w-full"
                />
              </Link>
              <div className="p-4">
                <h2 className="font-bold">{country.name?.common}</h2>
                <p>
                  <span className="font-bold">Population:</span>{" "}
                  {country?.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span className="font-bold">Region:</span> {country?.region}
                </p>
                <p>
                  <span className="font-bold">Capital:</span>{" "}
                  {country.capital ? country.capital[0] : ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <div className="w-64 text-center mt-12 mb-0 mr-auto ml-auto">
        {error ? (
          <h2 className="text-xl tracking-wider" style={{ color: "red" }}>
            Couldn't find this country!
          </h2>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default CountriesDisplay;
