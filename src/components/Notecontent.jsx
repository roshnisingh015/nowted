import { useEffect, useState,  } from "react";
import NoteView from "./NoteView";
import EmptyNoteState from "./EmptyNoteState"
import RestoreNoteState from "./RestoreNoteState";
import { useParams } from "react-router-dom";

/**
 * NoteContent Component
 * Container component that handles fetching note data.
 */
function NoteContent({   onNoteDelete }) {
  const {noteId} = useParams()
  const [note, setNote] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [deletedNoteTitle, setDeletedNoteTitle] = useState("")

  useEffect(() => {
    console.log(noteId)
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

  const handleRestore = async () => {
    try {
      const response = await fetch(`https://nowted-server.remotestate.com/notes/${noteId}/restore`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsDelete(false);
        onNoteDelete();
      } else {
        console.error("Failed to restore note on server.");
      }
    } catch (error) {
      console.error("Network error during restore:", error);
    }
  };

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