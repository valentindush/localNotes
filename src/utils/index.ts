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
    newNotes = [note, ...newNotes]
    localStorage.setItem('localnotes',JSON.stringify(newNotes))
}

export const getNoteById = (id: string)=>{
    return getNotes().filter((note)=> note.id == id)
}

export const deleteNote = (id: string)=>{
    const newNotes = getNotes().filter((note)=> note.id !== id)
    localStorage.setItem('localnotes', JSON.stringify(newNotes))
}

export const completeNote = (id: string)=>{
    let notes = getNotes()
    notes.forEach((note)=>{
        if(note.id === id){
            note.completed = true
        }
    })

    localStorage.setItem('localnotes', JSON.stringify(notes))
}