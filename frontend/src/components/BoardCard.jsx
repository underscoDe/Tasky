import React from "react";
import Category from "./Category";
import FormContainer from "./modals/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BoardCard = ({ cardData, addCategory, addTask }) => {
  const triggerText = <FontAwesomeIcon icon={faPlus} />;
  const classes = "collapse-icon";
  const tooltipText = "Add a new category";
  const currentForm = `ADD_CATEGORY/${cardData.id}`;
  return (
    <div className="p-1 board-card">
      <div className="card-container shadow px-3 py-4">
        <h5 className="card-title pb-3">
          {cardData.cardTitle} | {cardData.categories.length}
        </h5>
        {cardData.categories.map((category, index) => {
          return <Category key={index} cardId={cardData.id} addTask={addTask} categoryData={category} index={index} />;
        })}
        <FormContainer
          triggerText={triggerText}
          onSubmit={addCategory}
          classes={classes}
          tooltipText={tooltipText}
          currentForm={currentForm}
        />
      </div>
    </div>
  );
};

export default BoardCard;
