import React, { useEffect, useState } from "react";
import "../../styles/compare/Compare.css";
import CompareCountryInfo from "./CompareCountryInfo";

function Compare() {
  const [compareOne, setCompareOne] = useState([]);
  const [compareTwo, setCompareTwo] = useState([]);
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="Compare">
      <div className="compare-middle">
        <div className="select-comparing">
          <div className="select-1">
            <select
              onChange={(e) =>
                setCompareOne(
                  e.target.value !== false
                    ? JSON.parse(e.target.value)
                    : e.target.value
                )
              }
            >
              <option value={false}>Choose Country</option>
              {countries.length > 1 &&
                countries.map((dataset) => (
                  <option key={dataset.country} value={JSON.stringify(dataset)}>
                    {dataset.country}
                  </option>
                ))}
            </select>
          </div>
          <div className="select-2">
            <select
              onChange={(e) =>
                setCompareTwo(
                  e.target.value !== false
                    ? JSON.parse(e.target.value)
                    : e.target.value
                )
              }
            >
              <option value={false}>Choose Country</option>
              {countries.length > 1 &&
                countries.map((dataset) => (
                  <option key={dataset.country} value={JSON.stringify(dataset)}>
                    {dataset.country}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="compared">
          <div className="compared-col-1">
            <CompareCountryInfo
              country={compareOne.country}
              population={compareOne.population}
              cases={compareOne.cases}
              todayCases={compareOne.todayCases}
              deaths={compareOne.deaths}
              todayDeaths={compareOne.todayDeaths}
              recovered={compareOne.recovered}
              todayRecovered={compareOne.todayRecovered}
              tests={compareOne.tests}
              testsPerOneMillion={compareOne.testsPerOneMillion}
              flag={compareOne.countryInfo && compareOne.countryInfo.flag}
            />
          </div>
          <div className="compared-col-2">
            <CompareCountryInfo
              country={compareTwo.country}
              population={compareTwo.population}
              flag={compareTwo.countryInfo && compareTwo.countryInfo.flag}
              cases={compareTwo.cases}
              todayCases={compareTwo.todayCases}
              deaths={compareTwo.deaths}
              todayDeaths={compareTwo.todayDeaths}
              recovered={compareTwo.recovered}
              todayRecovered={compareTwo.todayRecovered}
              tests={compareTwo.tests}
              testsPerOneMillion={compareTwo.testsPerOneMillion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
