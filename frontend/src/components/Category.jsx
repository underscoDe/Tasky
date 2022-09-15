import React from "react";
import Task from "./Task";
import classnames from "classnames";
import FormContainer from "./modals/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Category = ({categoryData, index, cardId, addTask}) => {
  const triggerText = <FontAwesomeIcon icon={faPlus} />;
  const classes = "btn-add-task mb-3 mt-1";
  const tooltipText = "Add a new task";
  const currentForm = `ADD_TASK/${cardId}/${categoryData.id}`;
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
      <FormContainer
        triggerText={triggerText}
        onSubmit={addTask}
        classes={classes}
        tooltipText={tooltipText}
        currentForm={currentForm}
      />
    </div>
  );
};

export default Category;
