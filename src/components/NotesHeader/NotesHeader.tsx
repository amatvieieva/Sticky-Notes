import { HiArrowLongLeft } from "react-icons/hi2";
import "./NotesHeader.scss";

interface CreateNotesHeaderProps {
  onClick: () => void;
}
export default function NotesHeader({ onClick }: CreateNotesHeaderProps) {
  return (
    <div className="createNotesHeader__wrapper">
      <button className="createNotes__btnHidden" onClick={onClick}>
        <HiArrowLongLeft className="createNotes__arrow" />
      </button>
      <h1 className="createNotes__title">Sticky Notes</h1>
    </div>
  );
}
