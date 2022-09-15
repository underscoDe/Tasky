import React from "react";

export const Form = ({ onSubmit, currentForm }) => {
  const formType = currentForm.split("/")[0];

  if (formType === "ADD_BOARD") {
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Board Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Your board name here"
          />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Create board
          </button>
        </div>
      </form>
    );
  }

  if (formType === "ADD_CARD") {
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Card Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Your card name here"
          />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Create card
          </button>
        </div>
      </form>
    );
  }

  if (formType === "ADD_CATEGORY") {
    const cardId = currentForm.split('/')[1]
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your category name here"
          />
          <input type="hidden" value={cardId} id="cardid" name="cardid" />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Add category
          </button>
        </div>
      </form>
    );
  }

  if (formType === "ADD_TASK") {
    const cardId = currentForm.split('/')[1]
    const categoryId = currentForm.split('/')[2]
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="content">Task details</label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            placeholder="Your task content goes here"></textarea>
          <input type="hidden" value={cardId} id="cardid" name="cardid" />
          <input type="hidden" value={categoryId} id="categoryid" name="categoryid" />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Add task
          </button>
        </div>
      </form>
    );
  }
};

export default Form;
