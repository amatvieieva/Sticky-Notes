import './AllNotesCards.scss';
import NoteCard from '../NoteCard/NoteCard';
import NoNotes from './NoNotes';
import { useAppSelector } from '../../redux/hooks';
import { selectVisibleNotes } from '../../redux/selectors';
import { Note } from '../../redux/notes/interfaces';


interface AllNotesCardsProps {
  isSidebarOpen: boolean;
  isUserToggled: boolean;
}

export default function AllNotesCards({ isSidebarOpen, isUserToggled }: AllNotesCardsProps) {
  const visibleNotes = useAppSelector(selectVisibleNotes);

  return (
    <>
      {visibleNotes && visibleNotes.length !== 0 ? (
        <ul className={`allNotesCards ${isUserToggled ? (isSidebarOpen ? 'allNotes__open' : 'allNotes__close') : ''}`}>
          {visibleNotes.map((item: Note, index:number) => (
            <NoteCard data={item} key={index}></NoteCard>
          ))}
        </ul>
      ) : (
        <NoNotes></NoNotes>
      )}
    </>
  );
}