import Sidebar from "./components/Sidebar";
import NotesList from "./components/Notelist";
import NoteContent from "./components/Notecontent";

/**
 * Main App Component
 * 3-Column Flex Layout
 */
function App() {
  return (
    <div className="flex h-screen w-screen bg-[#1C1C1C] text-white font-['Source_Sans_3',_sans-serif] overflow-hidden">
      <Sidebar />
      <NotesList />
      <NoteContent />
    </div>
  );
}

export default App;
