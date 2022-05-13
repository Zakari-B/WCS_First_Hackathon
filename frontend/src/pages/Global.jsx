import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";
import green from "../assets/earth_green.png";
import polluted from "../assets/earth_polluted.png";
import axios from "axios";

const Global = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [goodScores, setGoodScores] = useState([]);
  const [evilScores, setEvilScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/scores").then((res) => {
      console.log(res);
      setHighScores(res.data);
    });
  }, []);

  useEffect(() => {
    setGoodScores(
      highScores
        .filter((user) => user.score > 0)
        .reduce((a, b) => a + b.score, 0)
    );

    setEvilScores(
      highScores
        .filter((user) => user.score < 0)
        .reduce((a, b) => a + b.score, 0)
    );
  }, [highScores]);

  return (
    <>
      <main className="background-global">
        <div className="container-global-table flex flex-col items-center">
          <div className="container-earth flex flex-row justify-around pt-20">
            <div className="earth-text flex flex-col items-center">
              <img
                src={green}
                alt=""
                className="global-img-logo select-none h-3/5 p-20"
                onClick={() => setIsClicked(!isClicked)}
              />
              <p className="text-white text-4xl m-2">
                Impact positif global : {goodScores}
              </p>
            </div>
            <div className="earth-text flex flex-col items-center">
              <img
                src={polluted}
                alt=""
                className="global-img-logo select-none h-3/5"
                onClick={() => setIsClicked2(!isClicked2)}
              />
              <p className="text-white text-4xl m-2">
                Impact négatif global : {evilScores}
              </p>
            </div>
          </div>
          <h3 className="text-white text-4xl m-4 -mt-20">
            Valeur globale : {goodScores + evilScores}
          </h3>
          <Link to="/">
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-4xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <p className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Rejouer
              </p>
            </button>
          </Link>

          <div
            className={`absolute left-10 ${isClicked ? "visible" : "hidden"}`}
          >
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
                {highScores.length &&
                  highScores
                    .sort((a, b) => {
                      return b.score - a.score;
                    })
                    .slice(0, 10)
                    .map((user) => (
                      <tr>
                        <th>{user.playerName}</th>
                        <th>{user.score}</th>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div
            className={`absolute right-10 ${isClicked2 ? "visible" : "hidden"}`}
          >
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
                {highScores.length &&
                  highScores
                    .sort((a, b) => {
                      return a.score - b.score;
                    })
                    .slice(0, 10)
                    .map((user) => (
                      <tr>
                        <th>{user.playerName}</th>
                        <th>{user.score}</th>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Global;
