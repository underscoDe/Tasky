import React from "react";

const BoardCard = () => {
  return (
    <div className="p-1 board-card">
      <div className="card-container shadow px-3 py-4">
        <h5 className="card-title pb-3">To do | 6</h5>
        <div className="category-container h">
          <h5 className="font-weight-bold">Category title | 7</h5>
          <div className="task p-2 mt-2">
            <div className="task-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              fuga quos ducimus excepturi commodi tempore sequi iusto.
            </div>
          </div>
          <div className="task p-2 mt-2">
            <div className="task-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              fuga quos ducimus excepturi commodi tempore sequi iusto.
            </div>
          </div>
        </div>
        <div className="category-container">
          <h5 className="font-weight-bold">Category title | 7</h5>
          <div className="task p-2">
            <div className="task-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              fuga quos ducimus excepturi commodi tempore sequi iusto.
            </div>
          </div>
        </div>
        <div className="category-container">
          <h5 className="font-weight-bold">Category title | 7</h5>
          <div className="task p-2">
            <div className="task-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              fuga quos ducimus excepturi commodi tempore sequi iusto.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
