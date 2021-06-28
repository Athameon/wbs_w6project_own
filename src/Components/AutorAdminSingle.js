import React, { useState, useEffect } from "react";
import "./AuthorAdmin.css";

const AuthorAdmin = (author) => {
  const [name, setName] = useState(author.name);
  const [image, setImage] = useState(author.image);
  const [aboutText, setAboutText] = useState(author.about);
  const [isEdit, setIsEdit] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submitted form");
  };
  const clickedEditButton = (event) => {
    event.preventDefault();
    setIsEdit((prev) => !prev);
  };
  const selectImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target);
  };

  const save = () => {
    console.log("Clicked submit button");
    setIsEdit(false);
    const object = JSON.stringify({
      id: author.id,
      name: name,
      image: image,
      about: aboutText,
    });
    console.log(object);

    fetch("http://localhost:3030/author", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: object,
    })
      .then(
        (response) => {
          if (response) {
            return response.json();
          }
          throw Error("Failed to put the data");
        },
        (error) => {
          throw Error("Network Error." + error);
        }
      )
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="author">
      <form className="autorInfo" onSubmit={submitForm}>
        <input
          type="text"
          name="authorName"
          className="authorName"
          onChange={(event) => {
            console.log(event.target.value);
            setName(event.target.value);
          }}
          value={name}
        />
        <button className="editButton" onClick={clickedEditButton}>
          Edit
        </button>
        {isEdit && (
          <input
            type="file"
            name="image"
            className="imageFile"
            onChange={selectImage}
            accept="image/*"
          />
        )}
        <img
          className="profilePicture"
          src={image}
          alt="Profile Picture of the author"
        />
        <textarea
          onChange={(event) => setAboutText(event.target.value)}
          value={aboutText}
        />
        {isEdit && (
          <input
            className="saveButton"
            type="button"
            value="Save"
            onClick={save}
          />
        )}
      </form>
    </div>
  );
};

export default AuthorAdmin;
