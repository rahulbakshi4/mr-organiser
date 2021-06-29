import React from 'react'
import heroimage from '../images/heroimage.png'

import KanbanInverted from '../images/kanban-i.png'
import ClockInverted from '../images/clock-i.png'
import NotesInverted from '../images/notes-i.png'
export default function HeroSection() {

    return (
        <div className="text-white h-full top-0 bg-oxford-blue">
            <h1 className="text-3xl p-2 font-light  text-center font-head">Mr Organiser</h1>
            <section  className="ml-16 text-2xl grid grid-cols-2 justify-items-center">
             <p className="p-12">Lorem ipsum dolsor sit amet, consectetur adipisicing elit. Aspernatur quidem deleniti architecto, illo laboriosam, ipsa corporis reprehenderit quos ipsum facere quibusdam eius, cum eum eaque animi perspiciatis dignissimos harum ea.</p>
             <img  className="w-4/5 h-auto" src={heroimage} alt=""/>
            </section>
            <section className="grid grid-cols-3 gap-4 ml-16 text-xl ">
                <div className="bg-transparent rounded-3xl hover:bg-yellow-100 hover:text-black ">
                    <img className="bg-black justify-items-center rounded-lg w-8 h-9 mt-4" id="kanban" src={KanbanInverted} alt="" />
                    <h4 className="mt-2">Kanban Board</h4>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa commodi, voluptas aperiam ad maiores rem dolor. Cum eum obcaecati quisquam, delectus tenetur assumenda facere totam. Maxime corrupti inventore incidunt.</p>
                </div>
                <div className="bg-transparent rounded-3xl hover:bg-yellow-100 hover:text-black"> 
                <img className="bg-black rounded-2xl w-9 h-9 mt-4" id="clock"  src={ClockInverted} alt="" />
                <h4 className="mt-2">Pomodoro Clock</h4>                   
                    <p className=" p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa commodi, voluptas aperiam ad maiores rem dolor. Cum eum obcaecati quisquam, delectus tenetur assumenda facere totam. Maxime corrupti inventore incidunt.</p>
                </div>
                <div className="bg-transparent rounded-3xl  hover:bg-yellow-100   hover:text-black">
                     <img className="w-8 h-9 mt-4 bg-black rounded-md"  id="bookmark" src={NotesInverted} alt="" />
                    <h4 className="mt-2">Notes</h4>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa commodi, voluptas aperiam ad maiores rem dolor. Cum eum obcaecati quisquam, delectus tenetur assumenda facere totam. Maxime corrupti inventore incidunt.</p>
                </div>
            </section>
        </div>
    )
}
