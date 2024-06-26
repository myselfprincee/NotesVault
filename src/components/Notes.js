import React from 'react'
import NoteState from '../context/notes/NoteState'
import { Toaster, toast } from 'sonner'

export const NoteContext = React.createContext()

export default function About() {;

  const OriginalUrl = process.env.REACT_APP_DATABASE_URL

  const notesInitial = []

  const [notes, setNotes] = React.useState(notesInitial);
   

  //get all notes 

  
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${OriginalUrl}/notes/allnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    })
      const json = await response.json();
      console.log(json)
      setNotes(json)
    
    }


  //ADD NOTE
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${OriginalUrl}/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      //Logic to Add the Note
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json()
    setNotes(notes.concat(note))
    toast.success("Note has been Added successfully", {
      duration: 1000,
    });
  }
    
    
    

  //DELETE NOTE
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${OriginalUrl}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({id})
    })
    response.json();
    toast.success("Note has been Deleted successfully", {
      duration: 1000,
    });

    //Logic to Delete the Note
    // console.log("deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //EDIT NOTE
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${OriginalUrl}/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, tag})
    })
    response.json();
    toast.success("Note has been Edited successfully", {
      duration: 1000,
    });

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
      <Toaster
      richColors
      className="notification"
      position="bottom-right"
      expand={false}
      />
        <NoteState/>
      </NoteContext.Provider>
    </div>
  )
}
