import { Clock } from "lucide-react";

/**
 * RestoreNoteState Component
 * Displayed when a note has been recently deleted and offers a restore option.
 */
function RestoreNoteState({ noteTitle, onRestore }) {
  return (
    <div className="flex-1 bg-[#1C1C1C] flex flex-col items-center justify-center text-center p-[40px]">
      <div className="bg-[#252525] p-[20px] rounded-[16px] mb-[20px]">
        <Clock size={48} className="text-[#333333]" />
      </div>
      
      <h2 className="text-white text-[24px] font-bold mb-[12px]">
        Restore “{noteTitle}”
      </h2>
      
      <p className="text-[#999999] text-[15px] leading-[1.6] max-w-[400px] mb-[30px]">
        Don't want to lose this note? It's not too late! Just click the 'Restore' button and it will be added back to your list. It's that simple.
      </p>

      <button 
        onClick={onRestore}
        className="px-[24px] py-[12px] bg-[#4A3F8A] text-white rounded-[8px] font-semibold text-[16px] hover:bg-[#5a4ea3] transition-colors"
      >
        Restore
      </button>
    </div>
  );
}

export default RestoreNoteState;
