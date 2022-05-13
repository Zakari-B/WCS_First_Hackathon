import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import green from "../assets/earth_green.png";
import polluted from "../assets/earth_polluted.png";
import teamIcon from "../assets/team.png";

import "../styles/Global.css";

const Global = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [goodScores, setGoodScores] = useState(0);
  const [evilScores, setEvilScores] = useState(0);
  const [globalScore, setGlobalScore] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/scores").then((res) => {
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
    setGlobalScore(goodScores + evilScores);
  }, [highScores]);

  return (
    <>
      <main className="background-global">
        <div className="container-global-table flex flex-col items-center">
          <div className="container-earth flex flex-row justify-between">
            <div className="earth-text flex flex-col items-center mx-10">
              <img
                src={green}
                alt=""
                className="global-img-logo select-none h-3/5 p-20"
                onClick={() => setIsClicked(!isClicked)}
              />
              <p className="text-green-500 text-3xl m-2 font-sans font-semibold">
                Impact positif global : {goodScores}
              </p>
            </div>
            <div className="earth-text flex flex-col items-center mx-10">
              <img
                src={polluted}
                alt=""
                className="global-img-logo select-none h-3/5"
                onClick={() => setIsClicked2(!isClicked2)}
              />
              <p className="text-red-500 text-3xl m-2 font-sans font-semibold">
                Impact négatif global : {evilScores}
              </p>
            </div>
          </div>
          <h3
            className={`${
              globalScore >= 0 ? "text-green-500" : "text-red-500"
            } text-5xl m-4 -mt-40 font-sans`}
          >
            Equilibre mondial : {globalScore}
          </h3>
          <Link to="/">
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 m-4 overflow-hidden text-4xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <p className="font-sans relative px-10 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
                  <th colSpan="2">Top des sauveurs</th>
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
                  <th colSpan="2">Top des destructeurs</th>
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
          <Link to="/Team">
            <div className="absolute bottom-0 right-0 p-6 flex flex-col items-center text-white hover:text-green-500 hover:animate-bounce">
              <img src={teamIcon} alt="our team" className="w-32 h-auto" />
              <p className="font-sans -mt-4">Meet the team</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Global;
