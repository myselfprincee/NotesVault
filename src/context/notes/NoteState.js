import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { NoteContext } from '../../components/Notes'
import { useEffect } from 'react';
import Noteitem from '../../components/Noteitem'
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form'
import {toast, Toaster} from 'sonner';

export default function NoteState(props) {
  const context = React.useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit
  } = useForm();


  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes()
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);



  const [modal, setModal] = useState(false);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  const [focusedInput, setFocusedInput] = useState("");


  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const updateNote = (currentNote) => {
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    setModal(true)


  };


  const removenote = () => {
    setModal(false);
  }


  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    e.preventDefault();
    toast.success("Note has been Updated Successfully")
    removenote()
  }


  // it has temporary solved re-render problem by including autoFocus it is not a best practice we will fix it later... 
  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };


  const MyModal = () => {

    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
      }
    }, [])






    return (
      <>
        <dialog className="Modal">
          <h3>Edit Note</h3>
          <form onSubmit={handleSubmit(handleClick)}>
            <input id="etitle" className='ip' type="text" name='etitle'
              {...register("etitle", { required: true, minLength: 5 })}
              value={note.etitle} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etitle"} />
            <input id="edescription" className='ip' type="text"
              {...register("ediscription", { required: true, minLength: 5 })}
              value={note.edescription} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "edescription"} />
            <input id="etag" className='ip' type="text"
              {...register("etag")}
              value={note.etag} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etag"} />
            <div className='edit-btn-cont'>
              <input id="edit-save" className="edit-btn" onClick={handleClick} value={"Save Changes"} />
              <button className="edit-btn edit-btn-cancel" onClick={removenote} value={"Cancel"} />
            </div>
          </form>
        </dialog>
      </>
    )
  }



  return (
    <>
    <Toaster className="notification"/>
      <Helmet>
        <title>NotesVault - Dashboard</title>
        <meta name='description' content='Access your Notes - Dashboard - Notesvault' />
        <link rel="canonical" href="/notes" />
      </Helmet>
      <Navbar />
      <AddNote note={note}/>
      {modal && <MyModal />}
      <h1 className='yournotes'>Your Notes</h1>
      <p style={{ textAlign: "center" }}>{notes.length === 0 && <div style={{ margin: "10px" }}>No notes to display you can add One in just few seconds..</div>}</p>
      {/* <div className='notes-box'> */}
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        }
        )}
      {/* </div> */}
    </>

  )
}