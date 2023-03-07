import React, { useState } from "react";

function AddNewMovie() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdAt: "",
    year: ""

  });
  

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://movie-finder-t7op.onrender.com/movies/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(() => {});
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
    console.log(formData);
  }

  return (
    <div className="addTransactionClass">
      <form onSubmit={handleSubmit} className="uiform">
        <div className="adding">
        <input
            className="addInput"
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
          />
  
          <input
            className="addInput"
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
        <input
            className="addInput"
            onChange={handleChange}
            type="year"
            placeholder="Released Year"
            name="year"
          />
                 <input
            className="addInput"
            onChange={handleChange}
            type="year"
            placeholder="createdAt"
            name="createdAt"
          />
        </div>
        <button className="addbtn" type="submit">
          ADD ITEM
        </button>
      </form>
    </div>
  );
}

export default AddNewMovie;