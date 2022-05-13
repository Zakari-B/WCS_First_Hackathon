import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";
import green from "../assets/earth_green.png";
import polluted from "../assets/earth_polluted.png";
const Global = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const highScores = [
    {
      pseudo: "TerryGrigri",
      score: 198,
    },
    {
      pseudo: "Aurora_Pink_Hair",
      score: 162,
    },
    {
      pseudo: "Anthony-92",
      score: 135,
    },
    {
      pseudo: "JuJuKayak",
      score: 122,
    },
    {
      pseudo: "KevPessouille",
      score: 149,
    },
    {
      pseudo: "Valosch",
      score: 155,
    },
    {
      pseudo: "Seb-best-wilder",
      score: 149,
    },
    {
      pseudo: "JF-bad-connection",
      score: 148,
    },
    {
      pseudo: "Ismamamama",
      score: 102,
    },
    {
      pseudo: "Ptit Crabe",
      score: 199,
    },
    {
      pseudo: "Zaki",
      score: -199,
    },
    {
      pseudo: "Basile52",
      score: -120,
    },
    {
      pseudo: "Jean Jean",
      score: -69,
    },
    {
      pseudo: "🚀G.Antho🚀",
      score: -112,
    },
    {
      pseudo: "TeamOutsiders4Ever",
      score: -181,
    },
    {
      pseudo: "page_404",
      score: -120,
    },
    {
      pseudo: "Alibaba",
      score: -153,
    },
    {
      pseudo: "Benoit-sans-son-chapeau",
      score: -192,
    },
    {
      pseudo: "Vigneronnerie",
      score: -176,
    },
    {
      pseudo: "while(true)",
      score: -127,
    },
  ];
  const goodScores = highScores
    .filter((user) => user.score > 0)
    .reduce((a, b) => a + b.score, 0);
  const evilScores = highScores
    .filter((user) => user.score < 0)
    .reduce((a, b) => a + b.score, 0);

  return (
    <>
      <main className="background-global">
        <div className="container-global-table flex flex-col items-center">
          <div className="container-earth flex flex-row justify-around">
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
          <h3 className="text-white text-4xl m-4 -mt-40">
            Valeur du score globale : {goodScores + evilScores}
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
                {highScores
                  .sort((a, b) => {
                    return b.score - a.score;
                  })
                  .slice(0, 10)
                  .map((user) => (
                    <tr>
                      <th>{user.pseudo}</th>
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
                {highScores
                  .sort((a, b) => {
                    return a.score - b.score;
                  })
                  .slice(0, 10)
                  .map((user) => (
                    <tr>
                      <th>{user.pseudo}</th>
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
