import React from 'react'
import { Cross1Icon } from '@radix-ui/react-icons';
export default function Notes(props) {
    function clickHandler(){
        props.onDelete(props.id)
    }
    return (
        <div className=" flex flex-col" >
        <div className="bg-yellow-100 rounded-xl w-64 h-36 ml-14 text-left p-4 mb-8">
             <h1>{props.title}</h1>
             <p>{props.content}</p>
             <button onClick = {clickHandler} className="text-right float-right relative cursor-pointer outline-none border-none rounded-lg shadow-lg hover:opacity-80 bg-oxford-blue text-white  pt-2 pb-2 pr-4 pl-4"><Cross1Icon/></button>
        </div>
        </div>
    )
}
