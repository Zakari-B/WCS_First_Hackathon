import React,{ useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import "../styles/Start.css";

const Start = () => {
  const { setPlayerName} = useContext(PlayerContext);
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
            <input type="text" placeholder="Enter your pseudo..." className="text-input" />
            <button type="button" className="btn">start</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
