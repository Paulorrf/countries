import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import api from "../service/api";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryKey, setCountryKey] = useState(null);
  const [currenciesKey, setCurrenciesKey] = useState(null);

  let params = useParams();

  useEffect(() => {
    setLoading(true);
    api
      .get("name/" + params.id)
      .then((res) => {
        setCountry(res.data[0]);
        setCountryKey(Object.keys(res.data[0].languages));
        setCurrenciesKey(Object.keys(res.data[0].currencies));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading ? (
    <div className="md:ml-16 mt-8 dark:text-darkText">
      <div className="w-32 ml-10 md:ml-0">
        <Link to="/">
          <button className="flex justify-center items-center w-full dark:bg-darkElements dark:text-darkText bg-commomElements py-2 shadow-md ">
            <BiArrowBack />
            <span className="pl-1">Back</span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row mt-8">
        <div className="w-4/5 md:w-2/5 ml-auto mr-auto lg:ml-0 lg:mr-0">
          <img src={country?.flags.png} alt={params} className="h-80 w-full" />
        </div>

        <div className="pl-16 pt-16 md:pt-16 lg:pt-4">
          <h2 className="mb-8 font-bold">
            {country?.name.common.toUpperCase()}
          </h2>
          <div className="flex flex-col md:flex-row gap-8 child:leading-8">
            <div className="">
              <p>
                <span className="font-bold">Native Name:</span>{" "}
                {country.name.nativeName[countryKey[0]].common}
              </p>
              <p>
                <span className="font-bold">Population:</span>{" "}
                {country?.population.toLocaleString("en-US")}
              </p>
              <p>
                <span className="font-bold">Region: </span> {country?.region}
              </p>
              <p>
                <span className="font-bold">Sub Region:</span>{" "}
                {country?.subregion}
              </p>
              <p>
                <span className="font-bold">Capital:</span>{" "}
                {country?.capital[0]}
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold">Top Level Domain:</span>{" "}
                {country.tld}
              </p>
              <p>
                <span className="font-bold">Currencies:</span>{" "}
                {country.currencies[currenciesKey[0]].name}
              </p>
              <p className="flex gap-1">
                <span className="font-bold">Languages:</span>{" "}
                {Object.values(country.languages).map((lang, idx, arr) => {
                  return arr.length - 1 === idx ? (
                    <p>{lang}</p>
                  ) : (
                    <p>{lang},</p>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-4 w-48 md:w-full">
            {country.borders && <p>Border Countries: </p>}
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-2">
              {country.borders &&
                country.borders.map((city) => {
                  return (
                    <li className="shadow-md bg-commomElements dark:bg-darkElements px-4 ">
                      {city}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Country;
