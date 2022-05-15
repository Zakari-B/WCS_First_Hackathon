import React from "react";
import { Link } from "react-router-dom";
import "../styles/Team.scss";
import teamIcon from "../assets/team.png";

const Team = () => {
  return (
    <section className="team">
      <div className="big-container-team">
        <img
          src={teamIcon}
          alt="our team"
          className="w-32 h-auto hover:text-green-500 hover:animate-bounce transition-all"
        />
        <h1 className="title-team">Team Undefined</h1>
        <p className="paragraph-team">- Codé en 24 HEURES -</p>
        <div className="profil-team ">
          <div className="team-box">
            <img
              src="https://avatars.githubusercontent.com/u/99882585?v=4"
              alt=""
              className="avatar"
            />
            <div className="icon-box">
              <a
                href="https://www.linkedin.com/in/zakari-boureghda/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/204944/linkedin.svg"
                  alt="linkedin"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/Zakari-B"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/349375/github.svg"
                  alt="github"
                  className="icon"
                />
              </a>
            </div>
            <p className="profil-name">Zakari</p>
          </div>
          <div className="team-box">
            <img
              src="https://avatars.githubusercontent.com/u/93570261?v=4"
              alt=""
              className="avatar"
            />
            <div className="icon-box">
              <a
                href="https://www.linkedin.com/in/julienvigneron/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/204944/linkedin.svg"
                  alt="linkedin"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/gnos28"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/349375/github.svg"
                  alt="github"
                  className="icon"
                />
              </a>
            </div>
            <p className="profil-name">Julien</p>
          </div>
          <div className="team-box">
            <img
              src="https://avatars.githubusercontent.com/u/100479719?v=4"
              alt=""
              className="avatar"
            />
            <div className="icon-box">
              <a
                href="https://www.linkedin.com/in/lionel-manzetti/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/204944/linkedin.svg"
                  alt="linkedin"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/LionelManzetti"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/349375/github.svg"
                  alt="github"
                  className="icon"
                />
              </a>
            </div>
            <p className="profil-name">Lionel</p>
          </div>
          <div className="team-box">
            <img
              src="https://avatars.githubusercontent.com/u/100119300?v=4"
              alt=""
              className="avatar"
            />
            <div className="icon-box">
              <a
                href="https://www.linkedin.com/in/anthony-aubert-994927176/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/204944/linkedin.svg"
                  alt="linkedin"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/Antho-37"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/349375/github.svg"
                  alt="github"
                  className="icon"
                />
              </a>
            </div>
            <p className="profil-name">Anthony</p>
          </div>
          <div className="team-box">
            <img
              src="https://avatars.githubusercontent.com/u/84743756?v=4"
              alt=""
              className="avatar"
            />
            <div className="icon-box">
              <a
                href="https://www.linkedin.com/in/ophelie-coudert/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/204944/linkedin.svg"
                  alt="linkedin"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/Crab-Prog"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/349375/github.svg"
                  alt="github"
                  className="icon"
                />
              </a>
            </div>
            <p className="profil-name">Ophélie</p>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 m-4 mt-8 overflow-hidden text-4xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <p className="relative px-10 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Rejouer
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Team;
