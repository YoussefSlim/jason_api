import { Modal, Button } from "react-bootstrap";

import "./style.scss";

export default function Modale({ message, setDeleteIsSuccess }) {
  const handleClose = () => {
    setDeleteIsSuccess(0);
  };
  return (
    <Modal.Dialog>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
