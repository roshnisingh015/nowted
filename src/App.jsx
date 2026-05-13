import Sidebar from "./components/Sidebar";
import NotesList from "./components/Notelist";
import NoteContent from "./components/Notecontent";
import { useState } from "react";

function App() {
    const [view, setView] = useState({
        type: "folder",
        folderId: "",
    });
    const [noteId, setNoteId] = useState("");

    return (
        <div className="flex h-screen w-screen bg-[#1C1C1C] text-white font-['Source_Sans_3',_sans-serif] overflow-hidden">
            <Sidebar
                folderHandler={(id) => {
                    setView({ type: "folder", folderId: id });
                }}
                archivedHandler={() => {
                    setView({ type: "archived" });
                }}
                favouriteHandler={() => {
                    setView({ type: "favourites" });
                }}
                trashHandler={() => {
                    setView({ type: "trash" });
                }}
            />

            <NotesList
                noteHandler={(id) => setNoteId(id)}
                folderId={view.type === "folder" ? view.folderId : ""}
                archived={view.type === "archived"}
                favourites={view.type === "favourites"}
                trash={view.type === "trash"}
            />

            <NoteContent noteId={noteId} />
        </div>
    );
}

export default App;
