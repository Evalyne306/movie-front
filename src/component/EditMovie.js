import React, { useState } from "react";

function EditMovie(props) {
  const [formData, setFormData] = useState({
    title: props.title || "",
    description: props.description || "",
    createdAt: props.createdAt || "",
    year: props.year || "",
    id: props.id || ""
  });
  
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/movies/${formData.id}`, {
      method: "PUT", // or "PATCH"
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
            value={formData.title}
          />
  
          <input
            className="addInput"
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
          />
        <input
            className="addInput"
            onChange={handleChange}
            type="year"
            placeholder="Released Year"
            name="year"
            value={formData.year}
          />
        <input
            className="addInput"
            onChange={handleChange}
            type="year"
            placeholder="createdAt"
            name="createdAt"
            value={formData.createdAt}
          />
        </div>
        <button className="addbtn" type="submit">
          UPDATE ITEM
        </button>
      </form>
    </div>
  );
}

export default EditMovie;
