import { Search, Plus, FileText } from "lucide-react";
import nowtedLogo from "./icons/nowted-logo.svg";

function App() {
    return (
        <div className="flex h-screen w-screen bg-[#181818]">
            {/* SIDEBAR */}
            <aside className="w-[300px] min-w-[340px] bg-[#181818] py-[30px] flex flex-col gap-[30px] overflow-y-auto">
                <div className="flex justify-between items-center px-[20px] h-[38px]">
                    <img src={nowtedLogo} alt="Nowted" />

                    <Search size={20} color="#FFFFFF" opacity={0.4} className="cursor-pointer" />
                </div>
                <div className="px-[20px]">
                    <button className="w-full h-[40px] bg-[#ffffff0d] rounded-[3px] flex items-center justify-center gap-[8px] text-white font-semibold text-[16px] cursor-pointer border-0">
                        <Plus size={16} color="#FFFFFF" />
                        New Note
                    </button>
                </div>
                <div className="flex flex-col gap-[8px]">

                    <p className="text-[#FFFFFF99] text-[16px] font-semibold px-[20px]">
                      Recents
                    </p>

                    <div className="flex flex-col gap-[5px]">


                        <div className="flex items-center gap-[15px] px-[20px] py-[10px] h-[40px] bg-[#312EB5] cursor-pointer overflow-hidden">
                            <FileText size={17} color="#FFFFFF" />
                            <span className="text-[16px] font-semibold text-white  ">
                                Reflection on the Month of June
                            </span>
                        </div>

                        <div className="flex items-center gap-[15px] px-[20px] py-[10px] h-[40px] cursor-pointer hover:bg-[#ffffff0d]">
                            <FileText size={17} color="#FFFFFF" opacity={0.6} />
                            <span className="text-[16px] font-semibold text-[#FFFFFF99] ">
                                Project Proposal
                            </span>
                        </div>

                        <div className="flex items-center gap-[15px] px-[20px] py-[10px] h-[40px] cursor-pointer hover:bg-[#ffffff0d]">
                            <FileText size={17} color="#FFFFFF" opacity={0.6} />
                            <span className="text-[16px] font-semibold text-[#FFFFFF99] ">
                                Travel Itinerary
                            </span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* NOTE LIST */}
            <div className="w-[350px] min-w-[350px] bg-[#252525]">
                <p className="text-white p-4">Note List</p>
            </div>

            {/* EDITOR */}

            <main className="flex-1 bg-[#1C1C1C]">
                <p className="text-white p-4">Editor</p>
            </main>
        </div>
    );
}

export default App;
