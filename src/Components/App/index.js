import "./style.scss";
import Form from "../Form";
import ListTeam from "../ListTeam";
import { useState } from "react";

export default function App() {
  // State initialization
  const [listAfterPost, setlistAfterPost] = useState({});

  return (
    <div className="App">
      <header className="App__top">
        <img src="logo_wild.png" alt="App-logo" className="App__top-logo" />
        <h1 className="App__top-title">Les Argonautes</h1>
      </header>
      <div className="App__midle">
        <Form setlistAfterPost={setlistAfterPost} />
        <ListTeam listAfterPost={listAfterPost} />
      </div>
      <footer className="App__bottom">
        <p>© Youssef Slim - Wild Code School</p>
      </footer>
    </div>
  );
}
