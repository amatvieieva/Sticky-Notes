import Modal from "../Modal";
import "./ModalDelNote.scss";

interface ModalDelNoteProps {
  closeModal: () => void;
  deleteNote: () => void;
}

export default function ModalDelNote({
  closeModal,
  deleteNote,
}: ModalDelNoteProps) {
  return (
    <Modal close={closeModal} modalSize='modalSmall'>
        <h4 className="modalDelNote__title">Delete Note</h4>
        <p className="modalDelNote__text">
          This action cannot be undone. The note will be permanently removed
          from your notes list and will no longer be visible to you. Are you
          sure you want to proceed?
        </p>
        <div className="modalDelNote__btnWrapper">
          <button
            className="modalDelNote__btn"
            type="button"
            onClick={deleteNote}
          >
            Ok
          </button>
          <button
            className="modalDelNote__btn"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
    </Modal>
  );
}
