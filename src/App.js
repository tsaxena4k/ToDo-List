import React, { useState } from 'react';
import './App.css';
import {ToDoList} from './ToDoList'

function App() {
  const[inputList,setInputList]=useState("");
  const[items,nextItem]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listItems=()=>{
    nextItem((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  }
  const deleteItem=(id)=>{
    console.log("deleted");
    nextItem(oldItems=>{
      return oldItems.filter((arr,index)=>id!==index);
    })
  };
  return (
    <div className="main-div">
      <div className="outer-div">
        <h1>ToDo List</h1>
        <div className="inner-div">
          <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent}></input>
          <button onClick={listItems}>+</button>
          <div className="scroll-bar">
            <ol>
              {items.map((item,index)=><ToDoList text={item} key={index} id={index} onSelect={deleteItem}/>)}
            </ol>
           </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
