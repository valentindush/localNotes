import { Note } from "../../types"

interface propsType{
    note: Note,
    deleteFunc: (id: string)=>void,
    completeFunc: (id: string)=>void
}

const NoteItem = ({note,deleteFunc, completeFunc}: propsType) => {
  return (
    <div className='rounded-xl p-4 text-gray-800 bg-white border-2 border-blue-200'>
      <div className="text-xs flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${note.completed? "bg-green-500" : "bg-red-500"}`}></div>
        <span>{note.completed? "Completed": "Not completed"}</span>
      </div>
      <div className="mt-2">
        <p className="text-xs">created at: {note.createdAt.toLocaleDateString('en-US', {day: 'numeric', month:"long", year:"numeric"})}</p>
      </div>
      <div className="mt-3">
        <p>{note.description}</p>
      </div>

      <div className="flex gap-3 mt-3">
        {!note.completed && <button onClick={()=>completeFunc(note.id)} className="bg-blue-500 text-white text-sm py-2 px-3 active:scale-[.98] rounded-lg">Complete</button>}
        <button onClick={()=>deleteFunc(note.id)} className="bg-white text-red-400 border-2 border-red-300 text-sm py-2 px-3 active:scale-[.98] rounded-lg">Delete</button>
      </div>
    </div>
  )
}

export default NoteItem