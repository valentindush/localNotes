import { Note } from "../types"

export const getNotes = ()=>{

    if(!localStorage.getItem('localnotes')) return []

    const notes =  JSON.parse(localStorage.getItem('localnotes') || "")

    let newNotes:Note[] = []
    notes.forEach((note: any)=>{
        let newNote:Note = {
            id: `${note.id}`,
            completed: Boolean(note.completed),
            description: `${note.description}`,
            createdAt: new Date(note.createdAt)
        };
        newNotes = [...newNotes, newNote]
    })

    return newNotes
}

export const saveNote = (note: Note)=>{
    let newNotes = getNotes()
    newNotes.push(note)
    console.log(newNotes)
    localStorage.setItem('localnotes',JSON.stringify(newNotes))
}

export const getNoteById = (id: string)=>{
    return getNotes().filter((note)=> note.id == id)
}

export const deleteNote = (id: string)=>{
    const newNotes = getNotes().filter((note)=> note.id !== id)
    localStorage.setItem('localnotes', JSON.stringify(newNotes))
}