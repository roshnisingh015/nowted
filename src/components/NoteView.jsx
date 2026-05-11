import { Calendar, Folder, MoreHorizontal } from "lucide-react";

/**
 * NoteView Component
 * Presentational component for displaying note details.
 */
function NoteView({ note }) {
  if (!note || Object.keys(note).length === 0) return null;

  return (
    <>
      {/* Content Header */}
      <div className="flex justify-between items-center px-[40px] pt-[40px] pb-[20px]">
        <h1 className="text-white text-[32px] font-bold leading-tight">{note.title}</h1>
        <MoreHorizontal size={24} className="text-[#999999] cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Metadata */}
      <div className="px-[40px] flex flex-col gap-[12px] mb-[40px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px] w-[110px] text-[#999999]">
            <Calendar size={18} />
            <span className="text-[15px]">Date</span>
          </div>
          <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">
            {note.createdAt ? new Date(note.createdAt).toLocaleDateString('en-GB') : ''}
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
