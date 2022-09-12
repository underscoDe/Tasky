import React from "react";
import Category from "./Category";

const BoardCard = ({cardData}) => {
  return (
    <div className="p-1 board-card">
        <div className="card-container shadow px-3 py-4">
            <h5 className="card-title pb-3">
                {cardData.cardTitle} | {cardData.categories.length}
            </h5>
            {cardData.categories.map((category, index) => {
              return (
                <Category key={index} categoryData={category} index={index} />
              );
            })}
        </div>
    </div>
  );
};

export default BoardCard;
