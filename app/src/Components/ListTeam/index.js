import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./style.scss";

export default function ListTeam() {
  const [members, setMembers] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:5050/membres`)
      .then((response) => setMembers(response.data))

      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <h2 className="member__title">Membre de l'équipage</h2>
      <div className="member__list">
        {members.map(({ id, name }) => {
          return (
            <Card key={id} style={{ width: "12rem" }}>
              <Card.Img
                style={{ width: "100%" }}
                variant="top"
                src="argonautes.png"
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Ose constamment te surpasser, pour apprendre à mieux te
                  connaître et ainsi trouver le courage de réaliser tes rêves
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
