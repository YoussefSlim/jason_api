// import npm
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

export default function ListTeam({ listAfterPost }) {
  // state initialization
  const [members, setMembers] = useState([]);

  // create a state reference
  const membersRef = useRef();
  membersRef.current = members;

  //  fetch the crew members from the database
  const fetchData = () => {
    axios
      .get(`http://localhost:5050/membres`)
      .then((response) => setMembers(response.data))
      .catch((error) => console.log(error));
  };

  // fetch data at first render
  useEffect(() => {
    fetchData();
  }, []);

  // update the list of members with each post request
  useEffect(() => {
    const newListMembers = [...membersRef.current, listAfterPost];
    if (Object.keys(listAfterPost).length !== 0) setMembers(newListMembers);
  }, [listAfterPost, membersRef]);

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
