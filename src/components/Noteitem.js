import React from 'react'
import {AiTwotoneDelete } from 'react-icons/ai';
import {BsPencilSquare } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { NoteContext } from './Notes'

export default function Noteitem(props) {

    const context = React.useContext(NoteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;
  return (
        <div className='savednote-container'>
            <h3 className='note-title'>{note.title}</h3>
            <pre className='note-description'>{note.description}</pre>  
            <p className='note-tags'>{note.tag}</p>
            <div  className="react-icons">
            <div  className="delete-icon" onClick={()=>{deleteNote(note._id)}}>
                <IconContext.Provider value={{ color: "red", size:"1.8rem"}}>
            <AiTwotoneDelete />
            </IconContext.Provider>
            <strong className='icon-text'>Delete</strong>
            </div>
            <div className="edit-icon" onClick={()=>{updateNote(note)}}>
           <IconContext.Provider value={{ color: "black", size:"1.5rem"}}>
            <BsPencilSquare/>
            </IconContext.Provider>
            <strong className='icon-text'>Edit</strong>
            </div>
            </div>
            
        </div>
  )
}
