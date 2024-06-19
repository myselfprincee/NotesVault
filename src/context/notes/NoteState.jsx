import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { NoteContext } from '../../components/Notes';
import Noteitem from '../../components/Noteitem'
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import Masonry from 'react-masonry-css'
import { FullNote } from '../../components/FullNote';    

export default function NoteState(props) {
  const context = React.useContext(NoteContext);
  const { notes, getAllNotes, editNote } = context;
  const navigate = useNavigate();
  let descriptionRef = useRef(null)

  const {data, status} = getAllNotes()

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // getAllNotes()
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);



  const [modal, setModal] = useState(false);
  const EditRef = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  const [focusedInput, setFocusedInput] = useState("");

  const OpenRef = () => {
    if (EditRef.current) {
      EditRef.current.showModal()
      console.log("opened")
    }
    // It is causing unexpected Bug due to which user is unable to scroll after deleting a note
    // document.body.style.overflowY = "hidden"

  }

  const updateNote = (currentNote) => {
    // setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    setModal(true)
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const removenote = () => {
    setModal(false);
  }


  const handleClick = (data) => {
    console.log(data)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    removenote()
  }


  // it has temporary solved re-render problem by including autoFocus it is not a best practice we will fix it later... 
  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };


  const MyModal = () => {

    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm()

    useEffect(() => {
      if (modal) {
        if (EditRef.current) {
          if (window.screen.width > 700) {
            EditRef.current.showModal();
          } else {
            EditRef.current.show();
          }
        }
        // document.body.style.overflowY = "hidden";
      } else {
        if (EditRef.current) {
          EditRef.current.close();
        }
      }
    }, [modal]);


    return (
      <dialog ref={EditRef} className='flex Mobile:bottom-0 border-2 border-black px-3 py-8 rounded-t-3xl z-50 fixed'>
        <form className='lg:Modal-form' onSubmit={handleSubmit((data) => handleClick(data))}>
          <input id="etitle" className='ip' type="text" name='etitle' {...register("etitle")} value={note.etitle} onChange={onChange} onFocus={handleFocus} autoFocus="autoFocus" minLength={5} required />
          <textarea ref={descriptionRef} id="edescription" className='ip min-h-max' type="text" {...register("edescription")} name='edescription' value={note.edescription} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "edescription"} minLength={5} required />
          <input id="etag" className='ip' type="text" name='etag' {...register("etag")} value={note.etag} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etag"} />
          <div className='edit-btn-cont'>
            <input id="edit-save" className="edit-btn" type='Submit' />
            <button className="edit-btn edit-btn-cancel " onClick={removenote} >Cancel</button>
          </div>
        </form>
      </dialog>
    )
  }

  //   return (
  //  <dialog>
  //   <form > </form>
  //  </dialog>



  //   )
  // }



  return (
    <>
      <Helmet>
        <title>Notesvault - My Notes</title>
        <meta name='description' content='Access your Notes without any hassle' />
        <link rel="canonical" href="/notes" />
      </Helmet>
      <Navbar />
      <AddNote note={note} />
      {modal && <MyModal />}
      <h1 className='yournotes flex'>Your Notes</h1>
      <div style={{ textAlign: "center" }}>{notes.length === 0 && <div className='m-10'>No notes to display you can add One in just few seconds..</div>}</div>
      <div className='notes-box mx-auto'>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid w-[95vw] m-auto"
          columnClassName="my-masonry-grid_column">
          {[...notes].reverse().map((note) => (
            // console.log(note.description.length),
            <Noteitem key={note._id} note={note} updateNote={updateNote} />
          ))}

        </Masonry>
          {/* <FullNote /> */}
      </div>
    </>

  )
}

