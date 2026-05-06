import { ExpandIcon } from "lucide-react";

/**
 * NotesList Component
 * Fixed width 260px, Dark background #2A2A2A
 */
function NotesList() {
  const notes = [
    { title: "My Goals for the Next Year", date: "31/12/2022", preview: "As the year comes to a ..." },
    { title: "Reflection on the Month of June", date: "21/06/2022", preview: "It's hard to believe that ...", active: true },
    { title: "My Favorite Memories from Childhood", date: "11/04/2022", preview: "I was reminiscing about ..." },
    { title: "Reflections on My First Year of College", date: "08/04/2022", preview: "It's hard to believe that ..." },
    { title: "My Experience with Meditation", date: "24/03/2022", preview: "I've been trying to ..." },
    { title: "Thoughts on the Pandemic", date: "01/02/2021", preview: "It's hard to believe that ..." },
    { title: "My Favorite Recipes", date: "08/01/2021", preview: "I love cooking and trying ..." },
  ];

  return (
    <div className="w-[260px] bg-[#2A2A2A] flex flex-col h-full border-r border-[#333333]">
      {/* List Header */}
      <div className="p-[20px] pb-[10px]">
        <h2 className="text-white text-[18px] font-bold">Personal</h2>
      </div>

      {/* Note Cards */}
      <div className="flex-1 overflow-y-auto">
        {notes.map((note, index) => (
          <div 
            key={index} 
            className={`px-[20px] py-[16px] cursor-pointer border-b border-[#333333] transition-colors ${note.active ? 'bg-[#333333]' : 'hover:bg-[#33333366]'}`}
          >
            <h3 className="text-white text-[15px] font-bold mb-[4px] truncate">{note.title}</h3>
            <div className="text-[#999999] text-[13px] flex gap-2 truncate">
              <span className="shrink-0">{note.date}</span>
              <span className="truncate">{note.preview}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;