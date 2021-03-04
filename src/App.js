import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Compare from "./components/compare/Compare";

function App() {
  const [globalCases, setGlobalCases] = useState(null);
  const [countryCases, setCountryCases] = useState([]);
  const [totalCountries, setTotalCountries] = useState(null);
  const [globalDeaths, setGlobalDeaths] = useState(null);
  const [countryDeaths, setCountryDeaths] = useState([]);
  const [globalRecoveries, setGlobalRecoveries] = useState(null);
  const [countryRecoveries, setCountryRecoveries] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function getGlobalCases() {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((res) => res.json())
        .then((data) => {
          setGlobalCases(data.cases);
          setGlobalDeaths(data.deaths);
          setGlobalRecoveries(data.recovered);
        });
    }
    async function getAllCountryCases() {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data
            .map((dataset) => ({
              countryName: dataset.country,
              countryCases: dataset.cases,
            }))
            .sort((a, b) => b.countryCases - a.countryCases);
          const countriesDeaths = data
            .map((dataset) => ({
              name: dataset.country,
              deaths: dataset.deaths,
            }))
            .sort((a, b) => b.deaths - a.deaths);

          const countriesRecoveries = data
            .map((dataset) => ({
              name: dataset.country,
              recovered: dataset.recovered,
            }))
            .sort((a, b) => b.recovered - a.recovered);
          setCountriesData(data);
          setCountryCases(countries);
          setTotalCountries(countries.length);
          setCountryDeaths(countriesDeaths);
          setCountryRecoveries(countriesRecoveries);
        });
    }

    getGlobalCases();
    getAllCountryCases();

    setInterval(() => {
      getGlobalCases();
      getAllCountryCases();
    }, 1800000);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/compare" render={(props) => <Compare />} exact />
        <Route
          path="/"
          exact
          render={(props) => (
            <div className="body">
              <SidebarLeft
                globalCases={globalCases}
                countryCases={countryCases}
              />
              <Map
                totalCountries={totalCountries}
                countriesData={countriesData}
              />
              <SidebarRight
                globalDeaths={globalDeaths}
                countryDeaths={countryDeaths}
                countryRecoveries={countryRecoveries}
                globalRecoveries={globalRecoveries}
              />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
