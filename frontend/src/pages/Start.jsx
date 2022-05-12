import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import "../styles/Start.css";

const Start = () => {
  const { setPlayerName } = useContext(PlayerContext);

  return (
    <>
      <div className="helpButton">
        <img src="https://www.svgrepo.com/show/195812/question.svg" alt="question" className="img-help" />
        <p className="hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  printing and typesetting industry. Lorem Ipsum has.</p>
      </div>
      <div className="startContainer">
        <div className="glassMorph">
          <div className="startText">JOUER ?</div>
          <div className="startInput">
            <form className="start-form">
              <input
                name="player"
                type="text"
                placeholder="Enter your pseudo..."
                className="text-input"
                onChange={(event) => {
                setPlayerName(event.target.value)}} />
               <Link to={`/Game`}> <button
                type="submit"
                className="btn">start
              </button></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
