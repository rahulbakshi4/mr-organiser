import React, { useState } from 'react'



export default function NoteTaker(props) {

const [note,setNote] = useState({
        title: "",
        content: ''
    })
function changeHandler(event){

    const {name, value } = event.target;
     setNote(prevNote => {
     return {
         ...prevNote,
         [name] : value
     }
     })
    
}
   const submitNote = (event) => {
       props.onAdd(note)
      setNote({
        title: "",
        content: ''
    })
    event.preventDefault()
   }
   
    return (
        <div className="flex justify-center ">
            <form className="bg-yellow-100  rounded-xl w-96 h-48 ml-14 text-left p-4 mb-8">
                <input name="title" placeholder="Title" onChange={changeHandler} value= {note.title} className="bg-yellow-100 p-4 m-2 outline-none border-none resize-none"/>
                <textarea name="content" placeholder="Content of note" onChange={changeHandler} value = {note.content} className="bg-yellow-100 p-4 m-2 outline-none border-none resize-none" rows="3" cols="30"></textarea>
                <button onClick = {submitNote} className="cursor-pointer outline-none border-none rounded-lg shadow-lg hover:opacity-80 bg-oxford-blue text-white  pt-2 pb-2 pr-7 pl-7">Add</button>
            </form>
        </div>
    )
}
