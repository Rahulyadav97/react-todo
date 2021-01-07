import React from "react";

export default function Todolist(props)
{
    
    return(
    <li onClick={function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }}>{props.value}<span className="close" onClick={()=>{
        props.lochecked(props.id);
    }}>x</span></li>
    )
}