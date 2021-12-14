import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  End(){

     const handleClick2 =()=>{
      Router.push('/eigth')
   }
   return(
      <div className="bac8">
            
         <div  className="a  last" onClick={()=>{handleClick2()}} >
            <span>上一页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default End;