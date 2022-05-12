import React from "react";
import CardListModal from "./CardListModal.jsx";

function Discard({ title, dataSet }) {
  return (
    <div>
      <CardListModal title={title} dataSet={dataSet} />
    </div>
  );
}

export default Discard;
