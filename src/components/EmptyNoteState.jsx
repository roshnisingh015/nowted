import { FileText } from "lucide-react";

/**
 * EmptyNoteState Component
 * Displayed when no note is selected in the main content area.
 */
function EmptyNoteState() {
  return (
    <div className="flex-1 bg-[#1C1C1C] flex flex-col items-center justify-center text-center p-[40px]">
      <div className="bg-[#252525] p-[20px] rounded-[16px] mb-[20px]">
        <FileText size={48} className="text-[#333333]" />
      </div>
      
      <h2 className="text-white text-[24px] font-bold mb-[12px]">
        Select a note to view
      </h2>
      
      <p className="text-[#999999] text-[15px] leading-[1.6] max-w-[360px]">
        Choose a note from the list on the left to view its contents, or create a new note to add to your collection.
      </p>
    </div>
  );
}

export default EmptyNoteState;
