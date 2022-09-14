import React from "react";

export const Form = ({ onSubmit, currentForm }) => {
  if (currentForm === 'ADD_BOARD') {
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
  if (currentForm === 'ADD_CARD') {
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
};

export default Form;
