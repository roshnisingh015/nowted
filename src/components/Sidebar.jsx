import nowtedLogo from "../icons/nowted-logo.svg";
import { useEffect, useState } from "react";
import { Search, Plus, FileText, Folder, Star, Trash2, Archive, SquarePen } from "lucide-react";
/**
 * Sidebar Component
 * Fixed width 240px, Dark background #252525
 */

function Sidebar({ folderHandler, archivedHandler, trashHandler, favouriteHandler }) {
    useEffect(() => {
        const getFolders = async () => {
            const res = await fetch("https://nowted-server.remotestate.com/folders");
            const response = await res.json();
            const result = response.folders.slice(0, 10);
            setFolders(result);
        };
        getFolders();
    }, []);

    useEffect(() => {
        const getRecent = async () => {
            const recentRes = await fetch("https://nowted-server.remotestate.com/notes/recent");
            const recentData = await recentRes.json();
            const recResult = recentData.recentNotes;
            setRecentNotes(recResult);
        };
        getRecent();
    }, []);

    const [folders, setFolders] = useState([]);
    const [recentNotes, setRecentNotes] = useState([]);
    return (
        <aside className="w-[240px] bg-[#252525] flex flex-col h-full border-r border-[#333333]">
            {/* Header */}
            <div className="flex justify-between items-center p-[20px] mb-[10px]">
                <div className="flex items-center gap-2">
                    <img src={nowtedLogo} alt="Nowted" className="h-[28px]" />
                    <SquarePen size={16} className="text-[#999999]" />
                </div>
                <Search size={20} className="text-[#999999] cursor-pointer" />
            </div>

            {/* New Note Button */}
            <div className="px-[20px] mb-[30px]">
                <button className="w-full h-[40px] bg-[#333333] rounded-[8px] flex items-center justify-center gap-[8px] text-white font-semibold text-[16px] border-0 cursor-pointer hover:bg-[#3d3d3d]">
                    <Plus size={18} />
                    New Note
                </button>
            </div>

            {/* Sections */}
            <div className="flex-1 overflow-y-auto px-[20px] flex flex-col gap-[30px] pb-[20px]">
                {/* Recents */}
                <section>
                    <h3 className="text-[12px] uppercase text-[#999999] font-bold tracking-[0.1em] mb-[12px]">
                        Recents
                    </h3>

                    <div className="flex flex-col gap-[4px]">
                        {recentNotes.map((note, index) => (
                            <div
                                key={note.id}
                                className={`flex items-center gap-[12px] px-[12px] py-[10px]   rounded-[8px] text-white cursor-pointer transition-colors ${
                                    index === 0
                                        ? "bg-[#4A3F8A] text-white"
                                        : "text-[#999999] hover:bg-[#333333]"
                                }`}
                            >
                                <FileText size={18} className="min-w-[18px]" />
                                <span className="text-[15px] font-medium truncate">
                                    {note.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Folders */}
                <section>
                    <h3 className="text-[12px] uppercase text-[#999999] font-bold tracking-[0.1em] mb-[12px]">
                        Folders
                    </h3>
                    <div className="flex flex-col gap-[4px]">
                        {folders.map((folder) => (
                            <div
                                onClick={() => folderHandler(folder.id)}
                                key={folder.id}
                                className="flex items-center gap-[12px] px-[12px] py-[10px] text-[#999999] hover:bg-[#333333] rounded-[8px] cursor-pointer transition-colors"
                            >
                                <Folder size={18} className="min-w-[18px]" />
                                <span className="text-[15px] font-medium truncate">
                                    {folder.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* More */}
                <section>
                    <h3 className="text-[12px] uppercase text-[#999999] font-bold tracking-[0.1em] mb-[12px]">
                        More
                    </h3>
                    <div className="flex flex-col gap-[4px]">
                        <div
                            onClick={favouriteHandler}
                            className="flex items-center gap-[12px] px-[12px] py-[10px] text-[#999999] hover:bg-[#333333] rounded-[8px] cursor-pointer transition-colors"
                        >
                            <Star size={18} className="min-w-[18px]" />
                            <span className="text-[15px] font-medium truncate">Favorites</span>
                        </div>
                        <div
                            onClick={trashHandler}
                            className="flex items-center gap-[12px] px-[12px] py-[10px] text-[#999999] hover:bg-[#333333] rounded-[8px] cursor-pointer transition-colors"
                        >
                            <Trash2 size={18} className="min-w-[18px]" />
                            <span className="text-[15px] font-medium truncate">Trash</span>
                        </div>
                        <div
                            onClick={archivedHandler}
                            className="flex items-center gap-[12px] px-[12px] py-[10px] text-[#999999] hover:bg-[#333333] rounded-[8px] cursor-pointer transition-colors"
                        >
                            <Archive size={18} className="min-w-[18px]" />
                            <span className="text-[15px] font-medium truncate">Archived Notes</span>
                        </div>
                    </div>
                </section>
            </div>
        </aside>
    );
}

export default Sidebar;
