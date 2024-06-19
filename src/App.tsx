import { useSelector } from "react-redux";
import "./App.css";
import CreateNotesSidebar from "./sections/CreateNotesSidebar/CreateNotesSidebar";
import AllNotesSection from "./sections/AllNotesSection/AllNotesSection";
import { useState } from "react";
import { RootState } from "./redux/store";

function App() {
  const background = useSelector((state:RootState) => state.reducer.background);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserToggled, setIsUserToggled] = useState(false);

  function handelClick (action: boolean) {
    setIsUserToggled(true);
    setIsSidebarOpen(action)
  }

  return (
    <div
      className="appWrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <CreateNotesSidebar isSidebarOpen={isSidebarOpen} isUserToggled={isUserToggled} handelClick={handelClick}></CreateNotesSidebar>
      <AllNotesSection isSidebarOpen={isSidebarOpen} isUserToggled={isUserToggled}></AllNotesSection>
    </div>
  );
}

export default App;
