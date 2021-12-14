
// import { Player } from 'video-react';
import React, { Component } from "react";
import style from "../css/first.module.css"
import Router from 'next/router'
// import "../style.css"
function  First(){
   const handleClick1 =()=>{
     console.log(123)
      Router.push('/')
   }
   const handleClick2 =()=>{
    Router.push('/second')
 }
   return(
     <div >
        <div  className={style.video} >
          <video width="600" height="300" controls="controls">
               <source src="https://vdn3.vzuu.com/HD/dec1f416-da28-11eb-a710-82620329a260-t11-vhbOddmTT8.mp4?disable_local_cache=1&auth_key=1639371239-0-0-ca99f4f0361078b82d86f2155d8c1cc0&f=mp4&bu=http-com&expiration=1639371239&v=tx" type="video/mp4" />
          </video>
        </div>
       <section className={style.section}>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
       </section>
         <div  className="a next" onClick={()=>{handleClick2()}} >
            <span>下一页</span> 
         </div>
         <div  className="a last" onClick={()=>{handleClick1()}} >
            <span>首页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default First;