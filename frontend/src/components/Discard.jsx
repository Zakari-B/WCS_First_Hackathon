import React, { useState } from "react";
import CardListModal from "./CardListModal.jsx";
import "../styles/Pioche.scss";
import "../styles/Card.scss";

function Discard({ title, dataSet }) {
	const [openModal, setOpenModal] = useState("hidden");

	return (
		<div className="piocheContainer">
			<CardListModal
				title={title}
				dataSet={dataSet}
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
			{dataSet
				.filter((card, cardIndex) => cardIndex < 5)
				.map((card, cardIndex) => (
					<div
						key={card.id}
						className="card-verso"
						style={{
							position: "absolute",
							top: `${4 + cardIndex * 1}vh`,
							right: `${1 + cardIndex * 1}vh`,
						}}
						onClick={() => setOpenModal("visible")}
					>
						<span>
							{cardIndex === Math.min(dataSet.length - 1, 4)
								? dataSet.length
								: null}
						</span>
					</div>
				))}
		</div>
	);
}

export default Discard;
