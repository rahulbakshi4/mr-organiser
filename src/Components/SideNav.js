import React from 'react'
import KanbanIcon from '../images/kanban.png'
import ClockIcon from '../images/clock.png'

import HomeIcon from '../images/home.png'
import NotesIcon from '../images/notes.png'
import {Link } from 'react-router-dom'
export default function SideNav() {
    return (
        <div>
            <div className="h-full bg-yellow-100 text-black top-0 left-0 z-1 fixed">
            <Link to="/home">
              <div className="rounded-full h-10 w-10 mt-10 m-2  transform hover:scale-125"><img className="w-8 h-9 p-1" src={HomeIcon} alt=""/></div>
              </Link>
              <Link to="/kanban">
              <div className="rounded-full h-10 w-10 mt-10 m-2 bg-yellow-100 transform hover:scale-125"><img className="w-8 h-9 p-1" src={KanbanIcon} alt=""/></div>
              </Link>
              <Link to="/clock">
              <div className="rounded-full h-10 w-10 mt-5  m-2 bg-yellow-100 transform hover:scale-125"><img className="w-10 h-10 " src={ClockIcon} alt=""/></div>
              </Link>
              <Link to="/notes">
              <div className="rounded-full h-10 w-10 mt-5  m-2 bg-yellow-100 transform hover:scale-125"><img className="w-9 h-9 " src={NotesIcon} alt=""/></div>
              </Link>
            </div>
        </div>
    )
}
