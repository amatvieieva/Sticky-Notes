import "./AllNotesSection.scss";
import AllNotesCards from "../../components/AllNotesCards/AllNotesCards";

interface AllNotesSectionProps {
  isSidebarOpen: boolean;
  isUserToggled: boolean;
}

export default function AllNotesSection({
  isSidebarOpen,
  isUserToggled,
}: AllNotesSectionProps) {
  return (
    <section className="allNotes">
      <AllNotesCards isSidebarOpen={isSidebarOpen} isUserToggled={isUserToggled}></AllNotesCards>
    </section>
  );
}
