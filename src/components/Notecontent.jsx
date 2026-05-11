import { useEffect, useState } from "react";
import NoteView from "./NoteView";
import EmptyNoteState from "./EmptyNoteState"

/**
 * NoteContent Component
 * Container component that handles fetching note data.
 */
function NoteContent({ noteId }) {
  const [note, setNote] = useState({});

  useEffect(() => {
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

  return (
    <main className="flex-1 bg-[#1C1C1C] flex flex-col h-full overflow-hidden">
      {noteId ? <NoteView note={note}  />: <EmptyNoteState/>}
    </main>
  );
}

export default NoteContent;