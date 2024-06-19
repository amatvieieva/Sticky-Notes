import { RxCross2 } from 'react-icons/rx';
import './NoteCardHeader.scss';
import { CiEdit } from 'react-icons/ci';
import { MdFullscreen } from 'react-icons/md';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { changeNote, deleteNote, toggleFavorite } from '../../../redux/notes';
import { useState } from 'react';
import ModalNoteDetails from '../../Modal/ModalNoteDetails/ModalNoteDetails';
import ModalDelNote from '../../Modal/ModalDelNote/ModalDelNote';
import ModalNote from '../../Modal/ModalNote/ModalNote';
import { Colors, Note } from '../../../redux/notes/interfaces';

interface NoteCardHeaderProps {
  data: Note;
}
export default function NoteCardHeader({ data }: NoteCardHeaderProps) {
  const [isModalDetailsOpen, setIsModalDetailsOpen] = useState(false);
  const [isModalDelOpen, setIsModalDelOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const dispatch = useDispatch();

  function updateNote(e: React.FormEvent<HTMLFormElement>, color: Colors) {
    const formData = new FormData(e.currentTarget);

    const newNote: Note = {
      color: color,
      text: formData.get("text")
        ? (formData.get("text") as string)
        : "Note Text",
      isFavorite: false,
      title: formData.get("title")
        ? (formData.get("title") as string)
        : "Title",
      id: data.id,
    };

    dispatch(changeNote(newNote));
    setIsModalEditOpen(false);
  }

  function removeNote() {
    dispatch(deleteNote(data.id));
    setIsModalDelOpen(false);
  }

  return (
    <div className="noteCardHeader">
      <h3>
        {data.title.length < 14
          ? data.title
          : data.title.substring(0, 12) + "..."}
      </h3>
      <div className={`noteCardHeader__actions ${data.color}`}>
        <div className="noteCard__favorite" onClick={() => dispatch(toggleFavorite(data.id))}>
          {data.isFavorite ? (
            <IoIosStar className="noteCard__favoriteIcon" />
          ) : (
            <IoIosStarOutline className="noteCard__favoriteIcon" />
          )}
        </div>
        <CiEdit className="noteCardHeader__actionsItem" onClick={() => setIsModalEditOpen(true)} />
        <MdFullscreen className="noteCardHeader__actionsItem" onClick={() => setIsModalDetailsOpen(true)} />
        <RxCross2 className="noteCardHeader__actionsItem" onClick={() => setIsModalDelOpen(true)} />
      </div>
      {isModalDetailsOpen && (
        <ModalNoteDetails data={data} closeModal={() => setIsModalDetailsOpen(false)}></ModalNoteDetails>
      )}
      {isModalDelOpen && (
        <ModalDelNote closeModal={() => setIsModalDelOpen(false)} deleteNote={removeNote}></ModalDelNote>
      )}
      {isModalEditOpen && (
        <ModalNote
          data={data}
          modalTitle="Edit the note"
          closeModal={() => setIsModalEditOpen(false)}
          actionNote={updateNote}
        ></ModalNote>
      )}
    </div>
  );
}
