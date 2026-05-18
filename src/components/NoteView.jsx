import { Calendar, Folder, MoreHorizontal, Star, Archive, Trash2 } from "lucide-react";
import { useState } from "react";

/**
 * NoteView Component
 * Presentational component for displaying note details.
 */
function NoteView({ note, onNoteDelete }) {
    let handleDelete = async () => {
        await fetch(`https://nowted-server.remotestate.com/notes/${note.id}`, { method: "DELETE" });
        onNoteDelete();
        setIsMenuOpen(false);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (!note || Object.keys(note).length === 0) return null;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Content Header */}
            <div className="flex justify-between items-center px-[40px] pt-[40px] pb-[20px] relative">
                <h1 className="text-white text-[32px] font-bold leading-tight">{note.title}</h1>
                <div className="relative">
                    <MoreHorizontal
                        size={24}
                        className="text-[#999999] cursor-pointer hover:text-white transition-colors"
                        onClick={toggleMenu}
                    />

                    {isMenuOpen && (
                        <div className="absolute right-full top-0 mr-2 w-[200px] bg-[#333333] rounded-lg shadow-xl py-2 z-50">
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-[#CCCCCC] hover:bg-[#444444] hover:text-white transition-colors text-sm">
                                <Star size={18} />
                                <span>Add to favourite</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-[#CCCCCC] hover:bg-[#444444] hover:text-white transition-colors text-sm">
                                <Archive size={18} />
                                <span>Archived</span>
                            </button>
                            <div className="h-[1px] bg-[#444444] my-1 mx-2"></div>
                            <button
                                onClick={handleDelete}
                                className="w-full flex items-center gap-3 px-4 py-2 text-[#FF4D4D] hover:bg-[#444444] transition-colors text-sm"
                            >
                                <Trash2 size={18} />
                                <span>Delete</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Metadata */}
            <div className="px-[40px] flex flex-col gap-[12px] mb-[40px]">
                <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px] w-[110px] text-[#999999]">
                        <Calendar size={18} />
                        <span className="text-[15px]">Date</span>
                    </div>
                    <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">
                        {note.createdAt ? new Date(note.createdAt).toLocaleDateString("en-GB") : ""}
                    </span>
                </div>
                <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px] w-[110px] text-[#999999]">
                        <Folder size={18} />
                        <span className="text-[15px]">Folder</span>
                    </div>
                    <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">
                        {note.folder?.name}
                    </span>
                </div>
            </div>

            {/* Body Text */}
            <div className="flex-1 overflow-y-auto px-[40px] pb-[60px]">
                <div className="max-w-[760px] flex flex-col gap-[24px]">
                    <p className="text-white text-[15px] leading-[1.7] font-normal">
                        {note.content}
                    </p>
                </div>
            </div>
        </>
    );
}

export default NoteView;
