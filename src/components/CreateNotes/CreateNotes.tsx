import { useState } from "react";
import NoteSquareAll from "../NoteSquareAll/NoteSquareAll";
import "./CreateNotes.scss";
import ModalNote from "../Modal/ModalNote/ModalNote";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Colors, Note } from "../../redux/notes/interfaces";
import { addNote } from "../../redux/notes";

interface CreateNotesProps {
  setIsShownSection: () => void;
}

export default function CreateNotes({ setIsShownSection }: CreateNotesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteColor, setNoteColor] = useState<Colors>(Colors.Lavender);

  const dispatch = useDispatch();

  function addNewNote(e: React.FormEvent<HTMLFormElement>, noteColor: Colors) {
    const formData = new FormData(e.currentTarget);

    const newNote: Note = {
      color: noteColor,
      text: formData.get('text') ? (formData.get('text') as string) : 'Note Text',
      isFavorite: false,
      title: formData.get('title') ? (formData.get('title') as string) : 'Title',
      id: uuidv4(),
    };

    dispatch(addNote(newNote));
    setIsModalOpen(false);
    setIsShownSection();
  }

  function handleClickSquare(color: Colors) {
    setIsModalOpen(true);
    setNoteColor(color);
  }

  return (
    <>
      <div className="createNotes__SquareAllWrapper">
        <NoteSquareAll handleClickSquare={handleClickSquare}></NoteSquareAll>
      </div>

      {isModalOpen && (
        <ModalNote
          noteColor={noteColor}
          modalTitle="Create note"
          closeModal={() => setIsModalOpen(false)}
          actionNote={addNewNote}
        ></ModalNote>
      )}
    </>
  );
}
