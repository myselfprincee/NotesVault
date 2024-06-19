import React, { useState, useEffect } from 'react'
import { NoteContext } from '../../components/Notes'
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import * as speechsdk from 'microsoft-cognitiveservices-speech-sdk';
import { getTokenOrRefresh } from '../../token_util';
import useSpinStore from '../../StateManagement/zustand'

const AddNote = () => {

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const container = document.querySelector(".voice")
      if (currentScrollPos < 281) {
        container.style.transform = "translateY(0px)"
        container.style.display = "flex"
      } else {
        container.style.transform = "translateY(100px)"
        container.style.transition = "all 300ms"  
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  const context = React.useContext(NoteContext);
  const { addNote } = context;
  const [isListening, setIsListening] = useState(false);
  const toggleSpin = useSpinStore((state) => (state.toggleSpin));

  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  async function sttFromMic() {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
    console.log("speaking")
    setIsListening(true)

    recognizer.recognizeOnceAsync(result => {
      if (result.reason === ResultReason.RecognizedSpeech) {
        setNote({ ...note, description: note.description + result.text })
        console.log(result.text)
        setIsListening(false)
        note.replace(/\./g, '\n')

      } else {
        alert("Really Sorry! Unexpected Error happened due to which I was unable to listen your voice.")
        setIsListening(false)
      }
    });
  }

  return (
    <>
      <div className="Notescontainer">
        <div className='addnoteContainer'>
          <div style={{ display: 'flex', flexDirection: "row" }} className='mb-5'>
            <h1 className='text-4xl' style={{ color: "#8ae595", stroke: "none", textShadow: "#000 1px 1px 0.3px" }}>Add a</h1><h1 className='text-4xl' style={{ marginLeft: "9px", borderBottom: "3px dashed #8ae595", textShadow: "#8ae595 1px 1px 0.3px" }}> Note</h1>
          </div>
          <input className='rounded-lg' type="text" name='title' id="Notes-textarea" style={{ marginBottom: "7px" }} placeholder='Enter Title' onChange={onChange} minLength={3} required value={note.title} />

          <textarea className='w-full rounded-lg' name="description" id="Notes-textarea" cols="40" rows="5" placeholder='Enter the Note you want to add' onChange={onChange} minLength={3} required value={note.description}></textarea>

          <div className='voice fixed rounded-full flex py-1 items-center bg-white justify-center w-[13%] Mobile:w-max px-3 left-0 bottom-5 right-0 z-50 gap-3 m-auto'>
            <button className='btn cursor-pointer bg-[#8ae595] font-semibold flex bottom-0 items-center rounded-3xl justify-center p-2 px-4 '>Format</button>
            {isListening ?
              <div onClick={() => { setIsListening(false) }} className="loader cursor-pointer bg-[#8ae595] flex items-center rounded-full justify-center h-[44px] w-[44px] p-2">
                <span className="stroke"></span>
                <span className="stroke"></span>
                <span className="stroke"></span>
                <span className="stroke"></span>
                <span className="stroke"></span>
              </div>
              :
              <img onClick={sttFromMic} width="44" height="44" className='loader cursor-pointer select-none bg-[#8ae595] flex items-center rounded-full justify-center h-[44px] w-[44px] p-2' src="https://img.icons8.com/fluency-systems-filled/480/FFFFFF/microphone.png" alt="microphone" />
            }
          </div>



          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <input type="text" name='tag' className='Notes-input' placeholder='Enter the Tag' style={{ marginTop: "10px", width: "70%", marginRight: "4.55%", padding: "6px" }} onChange={onChange} value={note.tag} />
            <button type="submit" className='signup-btn' onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNote
