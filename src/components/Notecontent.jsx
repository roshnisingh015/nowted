import { useEffect, useState,  } from "react";
import NoteView from "./NoteView";
import EmptyNoteState from "./EmptyNoteState"
import RestoreNoteState from "./RestoreNoteState";

/**
 * NoteContent Component
 * Container component that handles fetching note data.
 */
function NoteContent({ noteId,  onNoteDelete }) {
  const [note, setNote] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [deletedNoteTitle, setDeletedNoteTitle] = useState("")

  useEffect(() => {
    if (noteId){
      setIsDelete(false)
    }

    if (!noteId) {
      setNote({});
      return;
    }
    
    const fetchNote = async () => {
      try {
        const response = await fetch(`https://nowted-server.remotestate.com/notes/${noteId}`);
        const data = await response.json();
        setNote(data.note);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();
  }, [noteId]);

  const handleSwitchToRestore = () =>{
    setDeletedNoteTitle(note.title)
    setIsDelete(true)
    onNoteDelete()
  }

  const handleRestore = () => {
    setIsDelete(false)
    onNoteDelete()
  }

  return (
    <main className="flex-1 bg-[#1C1C1C] flex flex-col h-full overflow-hidden">
      {noteId && !isDelete ? 
      (
       <NoteView note={note}
      onNoteDelete = {handleSwitchToRestore} 
      />)
      : 
      isDelete?
      (
        <RestoreNoteState
        noteTitle={deletedNoteTitle}
        onRestore={handleRestore}
        />
      )
      :
       <EmptyNoteState/>}
    </main>
  );
}

export default NoteContent;