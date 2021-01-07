import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';
import Todolist from './Todolist.js';
function App() {
  var [value,setvalue] = useState("");
  var [items,setitems] = useState([]);
  function store(event)
  {
    const inputValue = event.target.value;
    setvalue(inputValue);
  }
  function checked(id){
        setitems((prevValue)=>{
          return prevValue.filter((value,index)=>{
            return index !== id;
          })
        })
  }
  function addList(){
   setitems((prevValue)=>{
     return [...prevValue,value];
   });
   setvalue("");
  }
  return (
    <>
    <div id="myDIV" className="header">
    <h2>My To Do List</h2>
  <input id="addItem" type="text" onChange={store} value={value} name="items" id="myInput" placeholder="Title..."/>
  <span onClick={addList} className="addBtn">Add</span>
  </div>
  <div>
  <ul id="myUL">
 {
   items.map((item, index)=>{
   return(<Todolist lochecked={checked} key={index} id={index} value={item}/>)
 })}
  </ul>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a2d9ff" fill-opacity="1" d="M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
  </>
  );
}

export default App;
