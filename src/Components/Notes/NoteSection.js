import React, { useState } from 'react'
import Notes from '../Notes/Notes'

import NoteTaker from '../Notes/NoteTaker'



export default function NoteSection() {
    const [notes, setNotes] = useState([])



    function addNote(newNote){
        setNotes(prevNotes => {
           return [...prevNotes,newNote]
        })
      

    }
    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
    return (
        <div>
            <h1 className="text-black text-2xl flex justify-start ml-14 mr-2 bg-yellow-100 p-6">Notes</h1>   
        <hr className=" mb-6 border-r-0 border-b-0 border-l-0 border-1 border-yellow-100" />
         <NoteTaker onAdd={addNote}/>
         {notes.map((noteItem, index)=>{
             return <Notes 
             key = {index}
             id = {index}
             title= {noteItem.title}
             content= {noteItem.content}
             onDelete = {deleteNote}
            
             />;
         })}
         
         
        </div>
    )
}