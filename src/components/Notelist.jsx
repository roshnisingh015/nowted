import { ExpandIcon } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * NotesList Component
 * Fixed width 260px, Dark background #2A2A2A
 */

function NotesList() {
    useEffect(() => {
        const getNotes = async () => {
            const resNotes = await fetch(
                "https://nowted-server.remotestate.com/notes?archived=false&favorite=false&deleted=false&folderId=ea0c5c00-b99a-455b-afa1-488d6b82b492&page=1&limit=10&search=search",
            );
            const responseNotes = await resNotes.json();
            const resultNotes = responseNotes.notes;
            setNoteslists(resultNotes);
           
        }
        getNotes();
    }, []);

    let [noteslists, setNoteslists] = useState([]);

    

    return (
        <div className="w-[260px] bg-[#2A2A2A] flex flex-col h-full border-r border-[#333333]">
            {/* List Header */}
            <div className="p-[20px] pb-[10px]">
                <h2 className="text-white text-[18px] font-bold">Personal</h2>
            </div>

            {/* Note Cards */}
            <div className="flex-1 overflow-y-auto">
                {noteslists.map((notelist) => (
                    <div
                        key={notelist.id}
                        className={`px-[20px] py-[16px] cursor-pointer border-b border-[#333333] transition-colors ${notelist.active ? "bg-[#333333]" : "hover:bg-[#33333366]"}`}
                    >
                        <h3 className="text-white text-[15px] font-bold mb-[4px] truncate">
                            {notelist.title}
                        </h3>
                        <div className="text-[#999999] text-[13px] flex gap-2 truncate">
                            <span className="shrink-0">{notelist.date}</span>
                            <span className="truncate">{notelist.preview}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotesList;
