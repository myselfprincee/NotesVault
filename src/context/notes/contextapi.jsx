//this is a written Tutorial for how to write the code of contexthook and it's usage ==>>

// firstly hierarchy bade se chhote me jati hai jese mujhe app ke ander kisi ek component me use karna hai to..

//isiliye implementation About.js me  hogi aur implement hoga compA.js me 

//and remember Function Based Component Aur Class Based Component ka Implementation alag alag hota hai

// for fuction based components

// in About.js 

/* 
import React from 'react'
import CompA from '../context/notes/CompA'
import { useState } from 'react';

export const NameContext = React.createContext()

export default function About() {
  let student = {
    name : "Prince",
    class : 12
  };

  const [state, setstate] = useState(student)

  const update = ()=>{
   setTimeout(() => {
      setstate({
        name : "Princeeee",
    class : 10
      })
  }, 1000);
}
  return (
    <div>
      <NameContext.Provider value={{state, update}}>
        <CompA/>
      </NameContext.Provider>
    </div>
  )
}

for class based components 

GO to WEB DEV SIMPLIFIED == MAST CHANNEL HAI 

*/


// and in Component --> CompA.js Components ka naam hamesha Capital se shuru hona chahiye


/*
import React,{useContext} from 'react'
import { NameContext } from '../../components/About'
import { useEffect } from 'react'

export default function CompA() {
    const data = useContext(NameContext)
    useEffect(() => {
      data.update();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div>
      Hi my name is {data.state.name} and i study in {data.state.class} class.
    </div>
  )
}
*/


