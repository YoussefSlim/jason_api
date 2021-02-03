import { useState } from "react";
import axios from "axios";
import "./style.scss";

export default function Form() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    axios
      .post(`http://localhost:5050/create`, { input })
      .then((response) => {
        console.log(response);
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
            name={input}
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
