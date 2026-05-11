import Sidebar from "./components/Sidebar";
import NotesList from "./components/Notelist";
import NoteContent from "./components/Notecontent";
import { useState } from "react";

/**
 * Main App Component
 * 3-Column Flex Layout
 */
function App() {

  const [folderId,setFolderId] = useState("") 
  const [noteId,setNoteId] = useState("")
  return (
    <div className="flex h-screen w-screen bg-[#1C1C1C] text-white font-['Source_Sans_3',_sans-serif] overflow-hidden">
      <Sidebar 
     handler={(id)=>{setFolderId(id), setNoteId("")}} />
      <NotesList 
    folderId={folderId}
    noteHandler = {(id) =>{setNoteId(id)}}
      />
      <NoteContent
      noteId = {noteId} />
    </div>
  );
}

export default App;
