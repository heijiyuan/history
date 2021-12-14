import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Sixth2(){
    const handleClick1 =()=>{
        Router.push('/seventh')
     }
     const handleClick2 =()=>{
      Router.push('/sixth')
   }
   return(
      <div className="bac6">
             <article className="art">
                大会主席团总主席，著名经济学家、国民党左派漆南熏，国民党左派将领陈达三当场牺牲。
                这就是“三.三一”惨案。惨案发生后，中共重庆地委书记杨闇公、重庆地委组织委员冉钧等被捕杀害，国民党左派组织、革命活动的主要阵地及党的各级组织遭到破坏。重庆的革命斗争暂时转入低潮。
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
 
    
   
  export default Sixth2;