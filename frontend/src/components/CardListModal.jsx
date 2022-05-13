import React from "react";
import Card from "./Card.jsx";
import "../styles/Board.scss";
import "../styles/Elements.scss";

const CardListModal = ({ title, dataSet, openModal, setOpenModal }) => {
  return (
    <>
      <p className="pioche-txt">{title}</p>
      <div
        className={`${openModal}
				} w-screen h-screen absolute left-0 top-0 right-0 bottom-0 z-50 p-40 flex justify-center align-center cardListModal ${
          title === "Défausse" ? "translationLeft" : "translationUp"
        }`}
      >
        <div
          className="text-gray-800 font-sans bg-gray-200/80 p-6 flex flex-col"
          onClick={() => setOpenModal("hidden")}
        >
          <h2 className="text-5xl font-semibold self-center m-4 mb-8">
            {title}
          </h2>
          <div className="flex justify-around m-8">
            {dataSet &&
              dataSet.map((card, cardIndex) => (
                <Card key={cardIndex} card={card} />
              ))}
          </div>
          <div>
            <button
              type="button"
              onClick={() => setOpenModal("hidden")}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-4xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <p className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Fermer
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListModal;
