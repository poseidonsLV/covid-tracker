import "../styles/SidebarLeft.css";
import NumberFormat from "react-number-format";

function SidebarLeft({ globalCases, countryCases }) {
  return (
    <div className="SidebarLeft">
      <div className="sidebarLeft-row-1">
        <h2>Global Cases</h2>
        <h1>
          <NumberFormat
            value={globalCases}
            displayType={"text"}
            thousandSeparator={true}
          />
        </h1>
      </div>
      <div className="sidebarLeft-row-2">
        <div className="row-2-title">
          <p>Cases by Country/Region/Sovereignty</p>
        </div>
        <div className="row-2-cases">
          {countryCases.map((dataset) => (
            <div key={dataset.countryName} className="row-2-cases-case">
              <strong>
                {
                  <NumberFormat
                    value={dataset.countryCases}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                }
              </strong>{" "}
              <p>{dataset.countryName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;
