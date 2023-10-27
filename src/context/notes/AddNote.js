import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { NoteContext } from '../../components/Notes'



export default function AddNote(props) {

  const context = React.useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    toast.success("Note has been Added successfully", {
      duration: 1000,
    });
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

 

  
  return (
    <>
    <Toaster
      richColors
      className="notification"
      position="bottom-right"
      expand={false}
      />
    <div className="Notescontainer">
      <div className='addnoteContainer'>
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <h1 style={{ color: "#8ae595", stroke: "none", textShadow: "#000 1px 1px 0.3px" }}>Add a</h1><h1 style={{ marginLeft: "9px", borderBottom: "3px dashed #8ae595", textShadow: "#8ae595 1px 1px 0.3px" }}> Note</h1>
        </div>
        <input type="text" name='title' id="Notes-textarea" style={{ marginBottom: "7px" }} placeholder='Enter Title' onChange={onChange} minLength={3} required value={note.title}/>
        <textarea name="description" id="Notes-textarea" cols="40" rows="5" placeholder='Enter the Note you want to add' onChange={onChange}minLength={3} required value={note.description}></textarea>
        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <input type="text" name='tag' className='Notes-input' placeholder='Enter the Tag' style={{ marginTop: "10px", width: "70%", marginRight: "4.55%", padding: "6px" }} onChange={onChange} value={note.tag}/>
          <button type="submit" disabled={note.title.length < 3 || note.description.length < 5} className='signup-btn' onClick={handleClick}>Submit</button>
          </div>
      </div>
    </div>
    </>
  )
}
