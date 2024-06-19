import "./AllNotesCards.scss";

export default function NoNotes() {
  return (
    <div className="noNotes">
      <div className="noNotes__shadow">
        <p className="noNotes__text">You have no notes yet.</p>
      </div>
    </div>
  );
}
