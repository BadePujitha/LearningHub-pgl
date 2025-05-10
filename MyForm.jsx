import React from 'react';
import "./MyForm.css"

const MyForm = () => {
  return (
    <form className="form">
      <label htmlFor="title" className="label">Title:</label><br />
      <input type="text" id="title" name="title" className="input" /><br /><br />
      <label htmlFor="description" className="label">Description:</label><br />
      <input type="text" id="description" name="description" className="input" /><br /><br />
      <label htmlFor="instructor" className="label">Instructor:</label><br />
      <input type="text" id="instructor" name="instructor" className="input" /><br /><br />
      <label htmlFor="price" className="label">Price:</label><br />
      <input type="number" id="price" name="price" className="input" /><br /><br />
      <input type="submit" value="Submit" className="submitButton" />
    </form>
  );
};

export default MyForm;
