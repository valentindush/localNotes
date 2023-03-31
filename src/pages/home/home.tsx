import { useState } from "react"
import NoteItem from "../../components/Note/note"
import { Note } from "../../types"
import { getNotes, saveNote } from "../../utils"

const sampleNotes:Note[] = [
  {
     id: `${Math.random() * 909708353}`,
     completed: true,
     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariaturLorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur",
     createdAt: new Date(Date.now())
  },
  {
    id: `${Math.random() * 909708353}`,
    completed: true,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur",
    createdAt: new Date(Date.now())
 },
 {
  id: `${Math.random() * 909708353}`,
  completed: false,
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur",
  createdAt: new Date(Date.now())
},
{
  id: `${Math.random() * 909708353}`,
  completed: true,
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur",
  createdAt: new Date(Date.now())
},
{
  id: `${Math.random() * 909708353}`,
  completed: false,
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur",
  createdAt: new Date(Date.now())
},
{
  id: `${Math.random() * 909708353}`,
  completed: true,
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur",
  createdAt: new Date(Date.now())
},
]

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

  return (
    <div className='bg-white py-24'>
      <div className="bg-gray-white border border-blue-500 border-opacity-25 p-4 w-[60vw] min-w-[500px] mx-auto rounded-xl shadow-lg">
      {/* Title */}
        <header className="sticky top-0 bg-white pb-6 ">
          <h2 className="font-bold text-xl text-blue-500">Local Notes</h2>
          <div className="h-1 bg-blue-400 mt-4"></div>
        </header>


        {/* New note */}
        <div className="flex gap-2">
          <input value={noteText} onChange={(e)=>setNoteText(e.target.value)} type="text" className="outline-none border border-opacity-50 border-gray-800 w-full p-2 rounded-lg text-sm" placeholder="new note" />
          <button onClick={saveNewNote} className="bg-blue-500 text-white text-sm py-2 px-3 active:scale-[.98] rounded-lg">Save</button>
        </div>
        
        {/* Notes */}

        <div className="flex flex-col gap-2 mt-2">

        {notes.map((note, i)=>(
          <NoteItem note={note} key={i} />
        ))}

        </div>


      </div>
    </div>
  )
}

export default Home