import React from "react";
import BoardCard from "./BoardCard";

const Board = ({ boardTitle, cardList }) => {
  return (
    <section className="board px-5 pb-5">
      <h3>{boardTitle}</h3>
      <div className="d-flex flex-nowrap">
        {cardList.map((card, ind) => {
          return <BoardCard cardData={card} key={ind} />;
        })}
      </div>
    </section>
  );
};

export default Board;
