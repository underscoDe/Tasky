import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Board Title</label>
        <input type="text" className="form-control" id="title" placeholder="Your board name here" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
