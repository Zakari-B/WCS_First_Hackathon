import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Global.css";
import green from "../assets/earth_green.png";
import polluted from "../assets/earth_polluted.png";
const Global = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  return (
    <>
      <Header />
      <main className="background-global">
        <div className="container-global-table">
          <div className={`${isClicked ? "visible" : "hidden" }`}>
            <table>
              <thead>
                <tr>
                  <th colspan="2">Top des sauveurs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Pseudo</th>
                  <th>Points</th>
                </tr>
                <tr>
                  <td>Rémi</td>
                  <td>198</td>
                </tr>
                <tr>
                  <td>Laura</td>
                  <td>177</td>
                </tr>
                <tr>
                  <td>Sandra</td>
                  <td>158</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container-earth">
            <img src={green} alt="" className="global-img-logo select-none" onClick={() => setIsClicked(!isClicked)} />
            <p>Score</p>
            
            <img src={polluted} alt="" className="global-img-logo select-none" onClick={() => setIsClicked2(!isClicked2)} />
            <p>Score</p>
          </div>
          <div className={`${isClicked2 ? "visible" : "hidden" }`}>
            <table>
              <thead>
                <tr>
                  <th colspan="2">Top des destructeurs</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th>Pseudo</th>
                  <th>Points</th>
                </tr>
                <tr>
                  <td>Rémi</td>
                  <td>198</td>
                </tr>
                <tr>
                  <td>Laura</td>
                  <td>177</td>
                </tr>
                <tr>
                  <td>Sandra</td>
                  <td>158</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Global;
