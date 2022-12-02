import React from "react";
import "./Resource.css";
import testImage from "../assets/fam.png";

function Resources() {
  return (
    <div>
      <h2>Farmers who need Resources</h2>
      <div className="expla">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <div className="w3-right">
        <input
          className="w3-input"
          style={{ backgroundColor: "inherit" }}
          placeholder="search"
        />
        <br />
      </div>
      <div className="reso">
        <div className="">
          <table style={{ fontWeight: 200 }} className="w3-table w3-stripe">
            <tr>
              <td style={{ fontWeight: 200, fontSize: "20px" }}>#949859</td>
              <td>
                <tr>
                  <b style={{ fontWeight: 200, fontSize: "20px" }}>
                    Resource Name
                  </b>
                </tr>
                <tr>contract type</tr>
                <tr>
                  lorem this is a est description just to test the interface
                  lorem this is a est description just to test the interface
                  lorem this is a est description just to test the interface
                </tr>
                <tr>
                  <button className="w3-button w3-border w3-round">
                    request farmer
                  </button>
                </tr>
              </td>
              <td>
                <img src={testImage} />
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 200, fontSize: "20px" }}>#7475676</td>
              <td>
                <tr>
                  <b style={{ fontWeight: 200, fontSize: "20px" }}>
                    Resource Name
                  </b>
                </tr>
                <tr>contract type</tr>
                <tr>
                  lorem this is a est description just to test the interface
                  lorem this is a est description just to test the interface
                  lorem this is a est description just to test the interface
                </tr>
                <tr>
                  <button className="w3-button w3-border w3-round">
                    request farmer
                  </button>
                </tr>
              </td>
              <td>
                <img src={testImage} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Resources;
