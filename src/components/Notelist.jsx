import { ExpandIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

/**
 * NotesList Component
 * Fixed width 260px, Dark background #2A2A2A
 */

function NotesList({ archived, favourites, trash, refresh }) {
    const { folderId } = useParams();
    let [noteslists, setNoteslists] = useState([]);
    useEffect(() => {
        const getNotes = async () => {
            const resNotes = await fetch(
                `https://nowted-server.remotestate.com/notes?archived=${archived}&favorite=${favourites}&deleted=${trash}&folderId=${folderId ?? ""}&page=1&limit=10&search=`,
            );
            const responseNotes = await resNotes.json();
            const resultNotes = responseNotes.notes;
            setNoteslists(resultNotes);
        };
        getNotes();
    }, [folderId, refresh, trash, favourites, archived]);

    return (
        <div className="flex flex-1 h-full">
            <div className="w-[260px] bg-[#2A2A2A] flex flex-col h-full border-r border-[#333333]">
                {/* List Header */}
                <div className="p-[20px] pb-[10px]">
                    <h2 className="text-white text-[18px] font-bold"></h2>
                </div>

                {/* Note Cards */}
                <div className="flex-1 overflow-y-auto">
                    {noteslists.map((note) => (
                        <NavLink
                            key={note.id}
                            to={`note/${note.id}`}
                            className={`px-[20px] py-[16px] cursor-pointer border-b border-[#333333] transition-colors ${note.active ? "bg-[#333333]" : "hover:bg-[#33333366]"}`}
                        >
                            <h3 className="text-white text-[15px] font-bold mb-[4px] truncate">
                                {note.title}
                            </h3>
                            <div className="text-[#999999] text-[13px] flex gap-2 truncate">
                                <span className="shrink-0">{note.date}</span>
                                <span className="truncate">{note.preview}</span>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default NotesList;
