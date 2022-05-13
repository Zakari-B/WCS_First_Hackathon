import React, { useState } from "react";
import Card from "./Card.jsx";

const Rules = () => {
	const cardSample = [
		{
			id: 4,
			name: "Arbre",
			cost: 1,
			positif: true,
			text: "1 soin",
			value: 1,
			effect: null,
			image: "/tree.png",
			isStarterDeck: true,
		},
		{
			id: 5,
			name: "Usine",
			cost: 1,
			positif: false,
			text: "1 dégât",
			value: -1,
			effect: null,
			image: "/factory.png",
			isStarterDeck: true,
		},
	];
	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			<button type="button" onClick={() => setOpen(!isOpen)}>
				Comment jouer ?
			</button>
			<div
				className={`${
					isOpen ? "visible" : "hidden"
				} h-screen w-screen absolute z-50 left-0 top-0 p-4`}
			>
				<div
					className="text-gray-800 w-full bg-gray-200/90 p-6 flex flex-col"
					onClick={() => setOpen(!isOpen)}
				>
					<h2 className="text-4xl font-semibold">Comment jouer ?</h2>
					<p className="text-xl">
						<br />
						Human vs Planet est un jeu de cartes. <br /> Vous commencez la
						partie avec un paquet de 10 cartes : 4 forêts, 4 usines, un
						politicien et une éolienne. Chaque carte est soit positive pour la
						planète soit négative.
						<br /> <br />
						Le but du jeu : jouer en même temps que d’autres joueurs pour
						impacter selon votre goût l’état de la planète.
					</p>
					<br />
					<div className="flex justify-around">
						<div className="flex flex-col items-center">
							<Card card={cardSample[0]} />
							<p className="text-base">Exemple carte positive</p>
						</div>
						<div className="flex flex-col items-center">
							<Card card={cardSample[1]} />
							<p className="text-base">Exemple carte négative</p>
						</div>
					</div>

					<br />
					<br />
					<h2 className="text-4xl font-semibold">
						Déroulement d’un tour de jeu :
					</h2>
					<p className="text-xl">
						<br />
						La partie dure 20 tours. Chaque tour, vous avez 3 énergies qui vous
						permettent de jouer des cartes. Une fois que vous avez fini votre
						tour, vous pouvez cliquer sur “Terminer le tour”.
						<br /> Vous pourrez alors choisir une nouvelle carte à ajouter à
						votre paquet de cartes.
					</p>
					<br />
					<br />
					<div>
						<button
							type="button"
							onClick={() => setOpen(!isOpen)}
							className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-4xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
						>
							<p className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Fermer
							</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rules;
