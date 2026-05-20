import Sidebar from "./components/Sidebar";
import NotesList from "./components/Notelist";
import NoteContent from "./components/Notecontent";
import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import EmptyNoteState from "./components/EmptyNoteState";

function App() {
    const [refresh, setRefresh] = useState(0);
    const handleRefresh = () => {
        setRefresh((prev) => prev + 1);
    };

    return (
        <div className="flex h-screen w-screen bg-[#1C1C1C] text-white font-['Source_Sans_3',_sans-serif] overflow-hidden">
            <Sidebar refresh={refresh} onFolderDelete={handleRefresh} />

            <Routes>
                <Route path="/" element={<NotesList refresh={refresh} />}>
                    <Route index element={<EmptyNoteState />} />
                </Route>
                <Route
                    path="/favourites"
                    element={<NotesList favourites={true} refresh={refresh} />}
                >
                    <Route index element={<EmptyNoteState />} />
                    <Route
                        path="note/:noteId"
                        element={<NoteContent onNoteDelete={handleRefresh} />}
                    />
                </Route>
                <Route path="/archived" element={<NotesList archived={true} refresh={refresh} />}>
                    <Route index element={<EmptyNoteState />} />
                    <Route
                        path="note/:noteId"
                        element={<NoteContent onNoteDelete={handleRefresh} />}
                    />
                </Route>
                <Route path="/trash" element={<NotesList trash={true} refresh={refresh} />}>
                    <Route index element={<EmptyNoteState />} />
                    <Route
                        path="note/:noteId"
                        element={<NoteContent onNoteDelete={handleRefresh} />}
                    />
                </Route>
                <Route path="/folder/:folderId" element={<NotesList refresh={refresh} />}>
                    <Route index element={<EmptyNoteState />} />

                    <Route
                        path="note/:noteId"
                        element={<NoteContent onNoteDelete={handleRefresh} />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
