import { useState } from "react";
import axios from "axios";

import "./style.scss";

export default function FormUpdate({ setOpen, open, id, name, setMembers }) {
  // State initialization
  const [inputUpdate, setInputUpdate] = useState("");

  // Collect  the valueUpdate of the input and update the state
  const handleChangeUpdate = (event) => {
    setInputUpdate(event.target.value);
  };

  // Update name of the member
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5050/members/${id}`, { inputUpdate })
      .then((response) => {
        setMembers(response.data.updatedMember);
      })
      .catch((error) => console.log(error));
    setOpen(!open);
  };

  return (
    <form className="form">
      <label>
        <input
          className="form__input-update"
          type="text"
          placeholder={name}
          name="updateName"
          required={true}
          value={inputUpdate}
          onChange={handleChangeUpdate}
        />
      </label>
      <button className="form__btn-update" onClick={handleClick}>
        enregistrer les modifications
      </button>
    </form>
  );
}
