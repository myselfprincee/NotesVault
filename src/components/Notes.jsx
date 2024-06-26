import React from 'react'
import NoteState from '../context/notes/NoteState'
import { Toaster, toast } from 'sonner'
import { useQuery } from '@tanstack/react-query'

export const NoteContext = React.createContext()

export default function About() {

  const OriginalUrl = import.meta.env.VITE_DATABASE_URL

  const notesInitial = []

  const [notes, setNotes] = React.useState(notesInitial);


  //get all notes 

  const getAllNotes = () => {
    return useQuery(
      {
        queryKey: ["all-notes"],
        queryFn: async () => {
          //API CALL
          const response = await fetch(`${OriginalUrl}/notes/allnotes`, {
            method: "GET",
            // cache: "default",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token")
            }
          })
          const json = await response.json();
          setNotes(json)
      
        },
        // cacheTime: Infinity,
        refetchOnMount: false, // Prevents refetch on component mount
        refetchOnWindowFocus: false, // Prevents refetch when window regains focus
        staleTime: 60 * 60 * 24 * 100, // Ensures data is considered fresh indefinitely
        refetchInterval: false, // Disables automatic refetching
        // enabled: true, 
      }
    );
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
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json()
    setNotes(notes.concat(note))
    toast.success('Note has been added Successfully', {
      position: 'top-right',
      className: "my-toast"
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
      body: JSON.stringify({ id })
    })
    const json = response.json();
    console.log(json)
    toast.success('Note has been deleted Successfully', {
      position: 'top-right',
      className: "my-toast"
    });

    //Logic to Delete the Note
    console.log("deleting the note with id" + id)
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
      body: JSON.stringify({ title, description, tag })
    })
    const json = response.json();

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
    toast.success('Note has been updated Successfully', {
      position: 'top-right',
      className: "my-toast"
    });
  }

  return (
    <div>

      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
        <Toaster position="top-right" richColors={true} />
        <NoteState />
      </NoteContext.Provider>
    </div>
  )
}
