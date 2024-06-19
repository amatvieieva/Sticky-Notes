import Modal from "../Modal";
import "./ModalNote.scss";
import { useState } from "react";
import NoteSquareAll from "../../NoteSquareAll/NoteSquareAll";
import { Colors, Note } from "../../../redux/notes/interfaces";

interface ModalNoteProps {
  closeModal: () => void;
  noteColor?: Colors;
  data?: Note;
  modalTitle: string;
  actionNote: (e: React.FormEvent<HTMLFormElement>, noteColor: Colors) => void;
}

export default function ModalNote({
  closeModal,
  noteColor = Colors.Lavender,
  data,
  modalTitle,
  actionNote,
}: ModalNoteProps) {
  const [title, setTitle] = useState(data ? data.title : "");
  const [text, setText] = useState(data ? data.text : "");
  const [color, setColor] = useState<Colors>(data ? data.color : noteColor);


  return (
    <Modal close={closeModal} color={color}>
      <h3 className="modalCreateNote__title">{modalTitle}</h3>
      <form
        className="modalCreateNote__form"
        onSubmit={(e) => actionNote(e, color)}
      >
        <label className="modalCreateNote__label" htmlFor="title">
          Title
        </label>
        <input
          className="modalCreateNote__field"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <label className="modalCreateNote__label" htmlFor="text">
          Description
        </label>
        <textarea
          className="modalCreateNote__textarea modalCreateNote__field"
          id="text"
          name="text"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        ></textarea>

        <div className="modalNote__NoteSquareWrapper">
          <NoteSquareAll
            handleClickSquare={(color: Colors) => setColor(color)}
          ></NoteSquareAll>
        </div>

        <button className="modalCreateNote__btnSave" type="submit">
          Save
        </button>
      </form>
    </Modal>
  );
}
