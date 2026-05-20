import Sidebar from "./components/Sidebar";
import NotesList from "./components/Notelist";
import NoteContent from "./components/Notecontent";
import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

function App() {
    const [refresh, setRefresh] = useState(0);
    const handleRefresh = () => {
        setRefresh((prev) => prev + 1);
    };

    return (
        <div className="flex h-screen w-screen bg-[#1C1C1C] text-white font-['Source_Sans_3',_sans-serif] overflow-hidden">
            <Sidebar refresh={refresh} onFolderDelete={handleRefresh} />

            <Routes>
                <Route path="/" element={<NotesList refresh={refresh} />} />
                <Route
                    path="/favourites"
                    element={<NotesList favourites={true} refresh={refresh} />}
                />
                <Route path="/archived" element={<NotesList archived={true} refresh={refresh} />} />
                <Route path="/trash" element={<NotesList trash={true} refresh={refresh} />} />
                <Route path="/folder/:folderId" element={<NotesList refresh={refresh} />} />

                <Route
                    path="/folder/:folderId/note/:noteId"
                    element={<NoteContent onNoteDelete={handleRefresh} />}
                />
            </Routes>
        </div>
    );
}

export default App;
