import "../styles/SidebarRight.css";
import NumberFormat from "react-number-format";

function SidebarRight({
  globalDeaths,
  countryDeaths,
  globalRecoveries,
  countryRecoveries,
}) {
  return (
    <div className="SidebarRight">
      <div className="sidebarRight-row-1">
        <div className="row-1-left">
          <div className="global-deaths">
            <h2>Global Deaths</h2>
            <h1>
              {
                <NumberFormat
                  value={globalDeaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              }
            </h1>
          </div>
          <div className="country-deaths">
            {countryDeaths.map((dataset) => (
              <div key={dataset.name} className="country-death">
                <p>
                  <NumberFormat
                    value={dataset.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  <span
                    style={{ color: "rgb(201, 201, 201)", marginLeft: "8px" }}
                  >
                    deaths
                  </span>
                </p>
                <p>{dataset.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="row-1-right">
          <div className="global-deaths">
            <h2>Global Recovered</h2>
            <h1>
              {" "}
              <NumberFormat
                value={globalRecoveries}
                displayType={"text"}
                thousandSeparator={true}
              />
            </h1>
          </div>
          <div className="country-deaths">
            {countryRecoveries.map((dataset) => (
              <div key={dataset.name} className="country-death">
                <p>
                  <NumberFormat
                    value={dataset.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  <span style={{ color: "green", marginLeft: "8px" }}>
                    recovered
                  </span>
                </p>
                <p>{dataset.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
