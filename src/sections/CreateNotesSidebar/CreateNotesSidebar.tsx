import "./CreateNotesSidebar.scss";
import HiddenCreateNotes from "../../components/HiddenCreateNotes/HiddenCreateNotes";
import SubTitle from "../../components/SubTitle/SubTitle";
import CreateNotes from "../../components/CreateNotes/CreateNotes";
import FilterNotes from "../../components/FilterNotes/FilterNotes";
import ChooseBackground from "../../components/ChooseBackground/ChooseBackground";
import CreateNotesHeader from "../../components/NotesHeader/NotesHeader";

interface CreateNotesSidebarProps {
  isSidebarOpen: boolean;
  handelClick: (isOpen: boolean) => void;
  isUserToggled: boolean;
}

export default function CreateNotesSidebar({
  isSidebarOpen,
  handelClick,
  isUserToggled,
}: CreateNotesSidebarProps) {
  return (
    <>
      <section
        className={`createNotesWrapper ${
          isUserToggled ? (isSidebarOpen ? "opening" : "closing") : ""
        }`}
      >
        <div className={!isSidebarOpen ? "closingContent" : ""}>
          <CreateNotesHeader
            onClick={() => handelClick(false)}
          ></CreateNotesHeader>

          <SubTitle>Notes</SubTitle>
          <CreateNotes
            setIsShownSection={() => handelClick(false)}
          ></CreateNotes>
          <SubTitle>Filter</SubTitle>
          <FilterNotes></FilterNotes>
          <SubTitle>Choose your background</SubTitle>
          <ChooseBackground></ChooseBackground>
        </div>

        {!isSidebarOpen && (
          <HiddenCreateNotes onClick={() => handelClick(true)}>
            Open Create Notes
          </HiddenCreateNotes>
        )}
      </section>
    </>
  );
}
