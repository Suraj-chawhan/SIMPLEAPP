"use client";
import React, { useEffect, useState } from 'react';
import Three from '../components/Three';
import "./app.css"

export default function HOME() {
    const[count,setCount]=useState(0);
    const[store,setStore]=useState([0]);
    const[index,setIndex]=useState(0);
    
    const INC=()=>{
        if(count!==150){
      const newCount=count+1;
      const newstore=store.slice(0,index+1);
      setCount(newCount);
      setStore([...newstore,newCount]);
      setIndex(newstore.length);
        }
    }
  
    function DEC(){
        if(count!==0){
    const newCount=count===0?count:count-1;
    const newstore=store.slice(0,index+1);
    setCount(newCount);
    setStore([...newstore,newCount]);
    setIndex(newstore.length);
        }
    }
  
     function UNDO(){
        if(index>0) {
            setIndex(index-1);
            setCount(store[index-1]);
          }
     }
    function REDO(){
      if(index<store.length-1) {
        setIndex(index+1);
        setCount(store[index+1]);
      }
    }
  return (
    <div style={{ position:"relative",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:'center'}}>
     <Three/>
      <div style={{ position:"absolute",width:400,display:"flex",flexDirection:"column",gap:20}}>
        <h1 style={{color:"#fff",textAlign:"center"}}>{count}</h1>
        <div className="progress-bar">
        <div className="progress" style={{width:`${(count/150)*100}%`}}></div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <button  className="btn" onClick={INC}>ADD</button>
      <button className="btn" onClick={DEC}>SUB</button>
      <button  className={index===0?"":"btn"} onClick={UNDO} disabled={index===0}>UNDO</button>
      <button className={index===store.length-1?"":"btn"} onClick={REDO} disabled={index===store.length-1}>REDO</button>
      </div>
      </div>
     
    </div>
  );
}
