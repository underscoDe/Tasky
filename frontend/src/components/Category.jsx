import React from "react";
import Task from "./Task";
import classnames from "classnames";

const Category = ({categoryData, index}) => {
  return (
    <div className={classnames("category-container", {"first-cat": index === 0})}>
      <h5 className="font-weight-bold">
        {categoryData.categoryTitle} | {categoryData.tasks.length}
      </h5>
      {categoryData.tasks.map((task, ind) => {
        return (
            <Task taskData={task} key={ind} />
        )
      })}
    </div>
  );
};

export default Category;
