import { useState } from "react"
import NoteItem from "../../components/Note/note"
import { Note } from "../../types"
import { completeNote, deleteNote, getNotes, saveNote } from "../../utils"

const Home = () => {

  const [notes, setNotes] = useState<Note[]>(getNotes())
  const [noteText, setNoteText] = useState("")

  const saveNewNote = () =>{
    if(noteText === "") return

    saveNote({
      id: `${Math.random() * 67024.76}-${Date.now()}`,
      completed: false,
      description: noteText,
      createdAt: new Date(Date.now())
    })

    setNotes(getNotes())  

    setNoteText("")
  }

  const deleteNoteFunc = (id: string)=>{
    deleteNote(id)
    setNotes(getNotes())
  }

  const completeFunc = (id: string) => {
    completeNote(id)
    setNotes(getNotes())
  }

  return (
    <div className='bg-white py-2 h-screen w-screen overflow-x-hidden'>
      <div className="bg-gray-white border border-blue-500 border-opacity-25 p-4 py-0 w-[60vw] min-w-[500px] mx-auto rounded-xl shadow-lg h-[95vh] overflow-auto md:w-full md:h-full md:min-w-full">
      {/* Title */}
        <div className="sticky top-0 mb-4 bg-white">
          <header className="bg-white pb-6 pt-4">
            <h2 className="font-bold text-xl text-blue-500">Local Tasks</h2>
            <div className="h-1 bg-blue-400 mt-4"></div>
          </header>


          {/* New note */}
          <div className="flex gap-2 ">
            <input value={noteText} onChange={(e)=>setNoteText(e.target.value)} type="text" className="outline-none border border-opacity-50 border-gray-800 w-full p-2 rounded-lg text-sm" placeholder="new task" />
            <button onClick={saveNewNote} className="bg-blue-500 text-white text-sm py-2 px-3 active:scale-[.98] rounded-lg">Save</button>
          </div>
        </div>
        
        {/* Notes */}

        <div className="flex flex-col gap-2 mt-2">

        {notes.map((note, i)=>(
          <NoteItem completeFunc={completeFunc} deleteFunc={deleteNoteFunc} note={note} key={i} />
        ))}

        {notes.length === 0 && <p className="text-lg text-gray-700">All tasks will be displayed here !</p>}

        </div>


      </div>
    </div>
  )
}

export default Home