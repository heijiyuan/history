import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Fifth2(){
    const handleClick1 =()=>{
        Router.push('/sixth')
     }
     const handleClick2 =()=>{
      Router.push('/fifth')
   }
   return(
      <div className="bac5">
             <article className="art">              
               消息传到重庆，中共重庆地委决定于1927年3月31日在通远门打枪坝以“重庆工农商学兵反英大同盟”名义，举行“重庆各界反对英美枪击南京市民大会”。
                反动军阀刘湘阴蓄异心，决定乘机镇压革命。
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
 
    
   
  export default Fifth2;