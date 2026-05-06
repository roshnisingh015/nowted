import { 
 
  
  Folder, 
 
  MoreHorizontal, 
  Calendar,
 
} from "lucide-react";
/**
 * NoteContent Component
 * Flex-1, Dark background #1C1C1C
 */
function NoteContent() {
  const paragraphs = [
    "It's hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.",
    "One of the best things that happened was getting promoted at work. I've been working really hard and it's great to see that effort recognized. It's also exciting to have more responsibility and the opportunity to contribute to the company in a bigger way. I'm looking forward to taking on new challenges and learning as much as I can in my new role.",
    "I also had a great time on my vacation to Hawaii. The beaches were beautiful and I loved trying all of the different types of Hawaiian food. It was nice to relax and get away from the daily grind for a bit. I'm so grateful to have had the opportunity to take a trip like that.",
    "On the downside, I feel like I didn't make as much progress on my fitness goals as I would have liked. I was really busy with work and didn't make it to the gym as often as I planned. I'm going to try to be more consistent in July and make exercise a higher priority. I know it will be good for my physical and mental health.",
    "I also had a few rough patches in my relationships this month. I had a couple of misunderstandings with friends and it was hard to navigate those conflicts. But I'm glad we were able to talk things through and move past them. I value my relationships and I want to make sure I'm always working to be a good friend.",
    "Overall, it was a good month with a mix of ups and downs. I'm looking forward to what July has in store! I'm hoping to make some more progress on my goals and spend quality time with the people I care about."
  ];

  return (
    <main className="flex-1 bg-[#1C1C1C] flex flex-col h-full overflow-hidden">
      {/* Content Header */}
      <div className="flex justify-between items-center px-[40px] pt-[40px] pb-[20px]">
        <h1 className="text-white text-[32px] font-bold leading-tight">Reflection on the Month of June</h1>
        <MoreHorizontal size={24} className="text-[#999999] cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Metadata */}
      <div className="px-[40px] flex flex-col gap-[12px] mb-[40px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px] w-[110px] text-[#999999]">
            <Calendar size={18} />
            <span className="text-[15px]">Date</span>
          </div>
          <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">21/06/2022</span>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px] w-[110px] text-[#999999]">
            <Folder size={18} />
            <span className="text-[15px]">Folder</span>
          </div>
          <span className="text-white text-[15px] underline decoration-[#333333] underline-offset-[6px] decoration-1">Personal</span>
        </div>
      </div>

      {/* Body Text */}
      <div className="flex-1 overflow-y-auto px-[40px] pb-[60px]">
        <div className="max-w-[760px] flex flex-col gap-[24px]">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-white text-[15px] leading-[1.7] font-normal">
              {p}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default NoteContent;