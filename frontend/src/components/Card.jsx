import React from "react";

const Card = ({ card }) => {
	return (
		<div
			id={card.id}
			className={`flex flex-col items-center w-1/5 h-3/4 m-3 border border-slate-700 rounded-md shadow-lg ${
				card.positif ? "bg-green-200" : "bg-orange-200"
			} `}
		>
			<div className="w-full flex justify-around m-2">
				<p className="text-2xl">{card.cost}</p>
				<h1 className="text-2xl font-semibold text-gray-800">{card.name}</h1>
			</div>
			<img src="" alt="" className="h-1/3 object-center" />
			<p className="">{card.text}</p>
		</div>
	);
};

export default Card;
