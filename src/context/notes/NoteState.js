import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { NoteContext } from '../../components/Notes'
import { useEffect } from 'react';
import Noteitem from '../../components/Noteitem'
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
// import { keyboard } from '@testing-library/user-event/dist/keyboard';
// import EditNote from '../../components/EditNote'

export default function NoteState(props) {
  const context = React.useContext(NoteContext);
  const { notes, getNotes , editNote} = context;
  const {showAlert} = props;
  const navigate = useNavigate();


  useEffect(() => {
    if(localStorage.getItem("token")){
      getNotes()
    }
    else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);



  const [modal, setModal] = useState(false);
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "" })
  const [focusedInput, setFocusedInput] = useState("");


  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const updateNote = (currentNote) => {
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    setModal(true)


  };


  const removenote = () => {
    setModal(false);
  }


  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    e.preventDefault();
    removenote()
  }


  // it has temporary solved re-render problem by including autoFocus it is not a best practice we will fix it later... 
  const handleFocus = (e) => {
    setFocusedInput(e.target.name );
  };

  
  const MyModal = () => {

    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => { document.body.style.overflowY = "scroll"; 
    }
    }, [])






    return (
      // <>
      //   <dialog className="Modal">
      //     <h3>Edit Note</h3>
      //     <input id="etitle" className='ip' type="text" name='etitle' value={note.etitle} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etitle"} minLength={3} required/>
      //     <input id="edescription" className='ip' type="text" name='edescription' value={note.edescription} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "edescription"} minLength={5} required/>
      //     <input id="etag" className='ip' type="text" name='etag' value={note.etag} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etag"} />
      //     <div className='edit-btn-cont'>
      //       <button id="edit-save" className="edit-btn" onClick={handleClick}>Save Changes</button>
      //       <button className="edit-btn edit-btn-cancel " onClick={removenote} >Cancel</button>
      //     </div>
      //   </dialog>
      //   <div className='modal-container'></div>
      // </>
      <>
        <dialog className="Modal">
          <h3>Edit Note</h3>
          <input id="etitle" className='ip' type="text" name='etitle' value={note.etitle} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etitle"} minLength={5} required/>
          <input id="edescription" className='ip' type="text" name='edescription' value={note.edescription} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "edescription"} minLength={5} required/>
          <input id="etag" className='ip' type="text" name='etag' value={note.etag} onChange={onChange} onFocus={handleFocus} autoFocus={focusedInput === "etag"} />
          <div className='edit-btn-cont'>
            <button id="edit-save" className="edit-btn" onClick={handleClick}>Save Changes</button>
            <button className="edit-btn edit-btn-cancel " onClick={removenote} >Cancel</button>
          </div>
        </dialog>
        <div className='modal-container'></div>
      </>
    )
  }

  
  
  return (
    <>
      <Navbar />
      <AddNote note={note} showAlert={showAlert}/>
      {modal && <MyModal />}
      <h1 className='yournotes'>Your Notes</h1>
      <p style={{textAlign: "center"}}>{notes.length === 0 && <div style={{margin:"10px"}}>No notes to display you can add One in just few seconds..</div>}</p>
      <div className='notes-box'>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        }
        )}
      </div>
    </>

  )
}