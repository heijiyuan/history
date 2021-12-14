import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Third2(){
    const handleClick1 =()=>{
        Router.push('/forth')
     }
     const handleClick2 =()=>{
        Router.push('/third')
     }
   return(
      <div className="bac3">
             <article  className="art" style={{left:"200px",fontSize:"35px"}}>
             这是中国共产党最早独立领导的大规模军事行动。
             在杨闇公同志的领导下，中共重庆地委在统一战线、武装斗争和党的建设三个方面开展了创造性的工作，四川地区出现了党组织坚强，国共合作巩固，群众运动高涨，武装斗争声势浩大的新局面，一跃而成全国革命形势发展最好的地区之一。
                
             </article>  
             <img src="http://pic.heiheiyun.top/lushun.png" alt="" className="yangpic2" />
          <div  className="a next" onClick={()=>{handleClick1()}} >
            <span>下一页</span> 
         </div>
         <div  className="a  last" onClick={()=>{handleClick2()}} >
            <span>上一页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default Third2;