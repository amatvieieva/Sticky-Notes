import { COLORS } from '../../redux/notes/constants';
import { Colors } from '../../redux/notes/interfaces';
import NoteSquare from '../NoteSquare/NoteSquare';
import './NoteSquareAll.scss';
interface NoteSquareAllProps {
  handleClickSquare: (color: Colors) => void;
}

export default function NoteSquareAll({ handleClickSquare }: NoteSquareAllProps) {
  return (
    <ul className="createNotes__list">
      {COLORS.map((color, item) => (
        <li key={item}>
          <NoteSquare noteColor={color.value} handleClickSquare={() => handleClickSquare(color.value)}></NoteSquare>
        </li>
      ))}
    </ul>
  );
}
