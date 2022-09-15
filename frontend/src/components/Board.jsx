import React from "react";
import BoardCard from "./BoardCard";
import FormContainer from "./modals/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Board = ({ boardTitle, cardList, addCard }) => {
  const triggerText = <FontAwesomeIcon icon={faPlus} />;
  const classes = "collapse-icon";
  const tooltipText = "Add a new card";
  const currentForm = "ADD_CARD";
  return (
    <section className="board px-5 pb-5">
      <h3>{boardTitle}</h3>
      <div className="d-flex flex-nowrap">
        {cardList.map((card, ind) => {
          return <BoardCard cardData={card} key={ind} />;
        })}
        <div className="p-1">
          <FormContainer
            triggerText={triggerText}
            onSubmit={addCard}
            classes={classes}
            tooltipText={tooltipText}
            currentForm={currentForm}
          />
        </div>
      </div>
    </section>
  );
};

export default Board;
