import { CiSquarePlus } from "react-icons/ci";
import './NoteSquare.scss';

interface NoteSquareProps {
  handleClickSquare: () => void;
  noteColor: string;
}

export default function NoteSquare({
  noteColor,
  handleClickSquare,
}: NoteSquareProps) {
  return (
    <>
      <div className={`addNote ${noteColor}`} onClick={handleClickSquare}>
        <CiSquarePlus className="addNote__plus" />
      </div>
    </>
  );
}
