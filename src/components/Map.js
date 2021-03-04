import "../styles/Map.css";
import GoogleMapReact from "google-map-react";
import Circle from "./Circle";

function Map({ totalCountries, countriesData }) {
  return (
    <div className="Map">
      <GoogleMapReact defaultCenter={{ lat: 59, lng: 30 }} defaultZoom={11}>
        {countriesData.map((dataset) => (
          <Circle
            lat={dataset.countryInfo.lat}
            lng={dataset.countryInfo.long}
            countryData={countriesData}
            countryName={dataset.country}
          />
        ))}
      </GoogleMapReact>{" "}
      <div className="map-bottom">
        <div className="total-countries">
          <h1>{totalCountries}</h1>
          <p>countries/regions</p>
        </div>
        <div className="informative-panel">
          <p>
            Here we can put some Copy Rights or information about this covid-19
            tracker and its policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;
