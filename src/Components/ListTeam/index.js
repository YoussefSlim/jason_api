// import npm
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import FormUpdate from "../FormUpdate";
import Modale from "../Modal";

import "./style.scss";

export default function ListTeam({
  listAfterPost,
  listAfterDelete,
  setListAfterDelete,
}) {
  // state initialization
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState("");
  const [deleteIsSuccess, setDeleteIsSuccess] = useState(0);
  const [open, setOpen] = useState(true);
  console.log("open =>", open);

  // create a state reference
  const membersRef = useRef();
  membersRef.current = members;

  //  fetch the crew members from the database
  const fetchData = () => {
    axios
      .get(`http://localhost:5050/members`)
      .then((response) => setMembers(response.data))
      .catch((error) => console.log(error));
  };
  const handleClickUpdate = () => {
    setOpen(!open);
  };

  // delete Member
  const handeleRemove = (event) => {
    event.preventDefault();

    const memberId = event.target.value;

    axios
      .delete(`http://localhost:5050/members/${memberId}`)
      .then((response) => {
        setMembers(response.data.allMembersAfterDelete);
        setMessage(response.data.message);
        setDeleteIsSuccess(response.data.deleted);
      })
      .catch((error) => console.log(error));
  };
  console.log(deleteIsSuccess);

  // fetch data at first render
  useEffect(() => {
    fetchData();
  }, []);

  // update the list of members with each post request
  useEffect(() => {
    const newListMembers = [...membersRef.current, listAfterPost];
    if (Object.keys(listAfterPost).length !== 0) setMembers(newListMembers);
  }, [listAfterPost, membersRef]);

  // delete the list of members with each put request
  useEffect(() => {
    const ListMembersAfterDelete = [...membersRef.current, listAfterDelete];
    setMembers(ListMembersAfterDelete);
  }, [listAfterDelete]);

  return (
    <>
      {deleteIsSuccess ? (
        <Modale message={message} setDeleteIsSuccess={setDeleteIsSuccess} />
      ) : (
        <main>
          <h2 className="member__title">Membre de l'équipage</h2>
          <div className="member__list">
            {members.map(({ id, name }) => {
              return (
                <Card key={id}>
                  <Card.Img
                    className="card__img"
                    style={{ width: "100%" }}
                    variant="top"
                    src="argonautes.png"
                  />
                  {open ? (
                    <Card.Body>
                      <Card.Title className="card__title">{name}</Card.Title>
                      <Card.Text className="card__description">
                        Ose constamment te surpasser, pour apprendre à mieux te
                        connaître et ainsi trouver le courage de réaliser tes
                        rêves
                      </Card.Text>
                      <Button
                        className="card__btn-update"
                        value={id}
                        variant="primary"
                        onClick={handleClickUpdate}
                      >
                        Editer
                      </Button>
                      <Button
                        className="card__btn-remove"
                        value={id}
                        variant="primary"
                        onClick={handeleRemove}
                      >
                        Supprimer le membre
                      </Button>
                    </Card.Body>
                  ) : (
                    <FormUpdate
                      open={open}
                      setOpen={setOpen}
                      id={id}
                      name={name}
                      membersRef={membersRef}
                      setMembers={setMembers}
                    />
                  )}
                </Card>
              );
            })}
          </div>
        </main>
      )}
    </>
  );
}
