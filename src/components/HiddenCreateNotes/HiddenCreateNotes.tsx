import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./HiddenCreateNotes.scss";

interface HiddenCreateNotesProps {
  onClick: () => void;
  children: string
}

export default function HiddenCreateNotes({ onClick, children }: HiddenCreateNotesProps) {
  return (
    <div className="hiddenCreateNotes" onClick={onClick}>
      <HiOutlineArrowNarrowLeft className="hiddenCreateNotes__arrow" />
      <p className="hiddenCreateNotes__text">{children}</p>
    </div>
  );
}
