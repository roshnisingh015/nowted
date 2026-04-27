function App() {
  return (
    <div className="flex h-screen w-screen bg-[#181818]">
      
     
      <aside className="w-[300px] min-w-[300px] bg-[#181818]">
        <p className="text-white p-4">Sidebar</p>
      </aside>

      
      <div className="w-[350px] min-w-[350px] bg-[#252525]">
        <p className="text-white p-4">Note List</p>
      </div>

      
      <main className="flex-1 bg-[#1C1C1C]">
        <p className="text-white p-4">Editor</p>
      </main>

    </div>
  )
}

export default App