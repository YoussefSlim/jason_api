import { useState } from "react";
import axios from "axios";

export default function Form({ setlistAfterPost }) {
  // State initialization
  const [input, setInput] = useState("");

  // Collect  the value of the input and update the state
  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  // Create the crew member and initialize the state
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5050/create`, { input })
      .then((response) => {
        console.log("post =>", response.data);
        setlistAfterPost(response.data);
      })
      .catch((error) => console.log(error));
    setInput("");
  };

  return (
    <>
      <img src="./image.png" alt="logo-jason" className="App__form" />
      <form className="form">
        <label>
          <p className="form__label">Nom de l'Argronaute</p>
          <input
            className="form__input"
            type="text"
            placeholder="Ajouter un(e) Argonaute "
            required={true}
            name="addName"
            value={input}
            onChange={handleChange}
          />
        </label>
        <button className="form__btn" onClick={handleClick}>
          Envoyer
        </button>
      </form>
    </>
  );
}
