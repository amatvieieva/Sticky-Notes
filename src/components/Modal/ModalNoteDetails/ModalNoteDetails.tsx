import { Note } from "../../../redux/notes/interfaces";
import Modal from "../Modal";
import "./ModalNoteDetails.scss";

interface ModalNoteDetailsProps {
  closeModal: () => void;
  data: Note;
}

export default function ModalNoteDetails({
  closeModal,
  data,
}: ModalNoteDetailsProps) {
  return (
    <Modal close={closeModal} color={data.color}>
      <h3 className="modalNoteDetails__title">{data.title}</h3>
      <p>{data.text}</p>
    </Modal>
  );
}
