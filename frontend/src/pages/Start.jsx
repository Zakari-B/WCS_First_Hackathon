import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import "../styles/Start.css";
import logo from "../assets/logo-hvh-light.png";

const Start = () => {
	const { playerName, setPlayerName } = useContext(PlayerContext);

	return (
		<header>
			<div className="helpButton">
				<img
					src="https://www.svgrepo.com/show/305312/question-mark.svg"
					alt="question"
					className="img-help select-none"
					draggable={false}
				/>
				<p className="hide">
					Bienvenue sur Human vs Planet ! <br /> <br /> Un jeu qui vous invite à
					prendre parti pour soit sauver la planète, soit participer activement
					à sa destruction.
					<html lang="en">
						<head>
							<meta charset="UTF-8" />
							<meta http-equiv="X-UA-Compatible" content="IE=edge" />
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1.0"
							/>
							<title>Document</title>
						</head>
						<body></body>
					</html>
				</p>
			</div>
			<div className="startContainer">
				<div className="glassMorph">
					<img
						src={logo}
						alt="human vs earth"
						className="select-none"
						draggable={false}
					/>
					<div className="startInput">
						<form className="flex justify-around items-center">
							<input
								name="player"
								type="text"
								placeholder="Entrez votre pseudo..."
								className="text-input px-8 py-3 mx-8 bg-white/70 placeholder:text-slate-800 placeholder:text-center placeholder:text-lg text-2xl"
								onChange={(event) => {
									setPlayerName(event.target.value);
								}}
							/>
							{playerName !== "" && (
								<Link to={`/Game`}>
									{" "}
									<button
										type="submit"
										className="btn m-2 text-gray-800 py-2 px-8 text-4xl rounded-lg font-bold mx-8 drop-shadow-md pt-4 hover:bg-white/40 hover:text-white"
									>
										Jouer
									</button>
								</Link>
							)}
						</form>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Start;
