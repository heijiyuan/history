import React, { Component } from "react";
import seventh from "../css/seventh.module.css"
import Router from 'next/router'
function  Seventh(){
    const handleClick1 =()=>{
        Router.push('/seventh3')
     }
     const handleClick2 =()=>{
      Router.push('/seventh')
   }
   return(
      <div className="bac7">
             <article className={seventh.article}>
             1933年4月，毛泽东在红军中与杨尚昆第一次见面时就谈到杨闇公烈士，并亲切询问烈士后代的情况。
             1937年，周恩来在延安称赞杨闇公是“为第一次国共合作而牺牲的烈士”。
             1957年，朱德为杨闇公烈士墓题写了碑文。1979年邓小平为《杨闇公日记》题写书名，
            </article>  
         <div  className="a next" onClick={()=>{handleClick1()}} >
            <span>下一页</span> 
         </div>
         <div  className="a  last" onClick={()=>{handleClick2()}} >
            <span>上一页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default Seventh;