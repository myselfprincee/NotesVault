import React, { useRef, useState } from 'react'
import { NoteContext } from './Notes'
import Loader from './Loader';
import { MoreOptions } from './Icons';
import { FullNote } from './FullNote';


export default function Noteitem(props) {

    const context = React.useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const dialogRef = useRef(null);
    const [spin, setSpin] = useState(false);

    const outlineDescription = note.description.length > 100 ? note.description.slice(0, 300) + "..." : note.description

    const OpenRef = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
        // It is causing unexpected Bug due to which user is unable to scroll after deleting a note
        // document.body.style.overflowY = "hidden"

    }
    const CloseRef = () => {
        if (dialogRef.current) {
            dialogRef.current.close()
        }
        setSpin(false)
        document.body.style.overflowY = "auto"
    }

    return (
        <div className='savednote-containe cursor-pointer relative bg-[#F1F0F0] m-auto mt-5 flex flex-col rounded-lg py-3 px-2 '>

            <div className='flex justify-between items-start m-0'>
                <h3 className='note-title lg:text-2xl text-wrap break-words font-medium Mobile:text-2xl'>{note.title}</h3>
                <button className='cursor-pointer moreoptions-icon rotate-90 right-0 p-1 hover:bg-[#dbd8d8] rounded-full transition-all'><MoreOptions height={30} width={30} /></button>

                <dialog>
                    <FullNote note={note} />
                </dialog>
            </div>
            <div className='note-description' dangerouslySetInnerHTML={{ __html: outlineDescription }} />
            <div style={{ margin: "10px", display: "flex", flexWrap: "wrap" }}>
                {note.tag.split(',').map((tag, index) => (
                    tag.trim() !== '' && (
                        <div className='note-tags' key={index} style={{ marginBottom: "10px" }}>
                            {tag.trim()}
                        </div>
                    )
                ))}
            </div>
            <dialog ref={dialogRef} className='rounded-lg left-0 right-0 top-0 bottom-0 m-auto'>
                <span className='my-4 flex flex-col items-center'>
                    <img width="55" className='my-2 transition-all' height="55" src="https://img.icons8.com/ios-glyphs/480/FA5252/error--v1.png" alt="error--v1" draggable={false} />
                    <h3 className='text-2xl font-semibold'>Are you sure ?</h3>

                    <p className='w-[55%] mx-[7px] my-2 Mobile:w-auto Mobile:text-[15px] text-center font-light opacity-[.4]'>This action cannot be undone. All values associated with this field will be lost.</p>
                    <span className='flex items-center space-x-4 my-2'>
                        <button className={`${spin && "w-[115px]"} outline-none flex justify-center rounded-full text-white px-3 py-2 bg-[#F73333]`} onClick={() => {
                            deleteNote(note._id)
                            setSpin(true)
                            console.log(spin)
                        }}><div>
                                {spin && <Loader />}
                            </div>{!spin && "Delete Note"}</button>
                        <button className='rounded-full w-[114px] text-white px-3 py-2 bg-[#777070]' onClick={CloseRef}>Cancel</button>
                    </span>
                </span>

            </dialog>
            <div className="react-icons">
                {/* <div className="delete-icon" onClick={OpenRef}>
                    <div className="icons8-delete"></div>
                    <strong className='icon-text'>Delete</strong>
                </div>
                <div className="edit-icon" onClick={() => { updateNote(note) }}> */}
                    {/* <svg height={25} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg> */}
                    {/* <svg height={28} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path></svg>
                    <strong className='icon-text'>Edit</strong>
                </div> */}
            </div>

        </div>
    )
}