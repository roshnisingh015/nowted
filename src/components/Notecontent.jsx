import { 
 
  
  Folder, 
 
  MoreHorizontal, 
  Calendar,
  Import,
 
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * NoteContent Component
 * Flex-1, Dark background #1C1C1C
 */
function NoteContent() {
  useEffect(()=>{
    let content = async()=>{
      const response = await fetch("https://nowted-server.remotestate.com/notes/9a74de36-110c-44ee-8505-c095e9b5b401")
      const resContent  = await response.json();
      
      setNote(resContent.note)
       console.log(resContent.note);
       
    }

    content();
  },[])

  const[note,setNote] = useState({})
 
 

  return (
    <main className="flex-1 bg-[#1C1C1C] flex flex-col h-full overflow-hidden">
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
          <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">{note.createdAt ? new Date(note.createdAt).toLocaleDateString('en-GB') : ''}</span>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px] w-[110px] text-[#999999]">
            <Folder size={18} />
            <span className="text-[15px]">Folder</span>
          </div>
          <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">{note.folder.name}</span>
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
    </main>
  );
}

export default NoteContent;