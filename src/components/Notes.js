import React from 'react'
import NoteState from '../context/notes/NoteState'

export const NoteContext = React.createContext()

export default function About(props) {
  const host = "http://localhost:5000/notes"

  const notesInitial = []

  const [notes, setNotes] = React.useState(notesInitial);

  //get all notes 
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/allnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZTBmOGJiZWEyMjcyZmM5OGQ2ZTJlIn0sImlhdCI6MTY3NzYwMTg4N30.fxuWR0pWvi1y5LBYQ0SKAqZZ8ejrP3Dcti8eR8hEH2k'
      }
    })
      const json = await response.json();
      console.log(json)
      setNotes(json)
    
    }



  //ADD NOTE
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZTBmOGJiZWEyMjcyZmM5OGQ2ZTJlIn0sImlhdCI6MTY3NzYwMTg4N30.fxuWR0pWvi1y5LBYQ0SKAqZZ8ejrP3Dcti8eR8hEH2k'
      },
      //Logic to Add the Note
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json()
    setNotes(notes.concat(note))
  }
    
    
    

  //DELETE NOTE
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZTBmOGJiZWEyMjcyZmM5OGQ2ZTJlIn0sImlhdCI6MTY3NzYwMTg4N30.fxuWR0pWvi1y5LBYQ0SKAqZZ8ejrP3Dcti8eR8hEH2k'
      },
      body: JSON.stringify({id})
    })
    const json =  response.json();
    console.log(json)

    //Logic to Delete the Note
    console.log("deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //EDIT NOTE
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZTBmOGJiZWEyMjcyZmM5OGQ2ZTJlIn0sImlhdCI6MTY3NzYwMTg4N30.fxuWR0pWvi1y5LBYQ0SKAqZZ8ejrP3Dcti8eR8hEH2k'
      },
      body: JSON.stringify({title, description, tag})
    })
    const json =  response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    //LOGIC TO EDIT THE NOTE
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

    return (
    <div>
      <NoteContext.Provider value={{ notes, addNote , deleteNote, editNote, getNotes}}>
        <NoteState/>
      </NoteContext.Provider>
    </div>
  )
}
