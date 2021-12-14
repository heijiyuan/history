import React, { Component } from "react";
import second from "../css/second.module.css";
import Router from 'next/router'
function  Second(){
    const handleClick1 =()=>{
        Router.push('/third')
     }
     const handleClick2 =()=>{
        Router.push('/firstpage')
     }
   return(
      <div className="bac2">
         <img className="yangpic" src="http://pic.heiheiyun.top/yangpic.png" alt="" />
             <article className="art" style={{marginLeft:'150px'}}>
              简介：
              杨闇公（1898——1927），中国共产主义运动先驱者、四川党团组织主要创建人和大革命运动的主要领导人，重庆革命领袖。
              杨闇公同志，中国共产主义运动先驱者、四川党团组织主要创建人和大革命运动的主要领导人，
              重庆革命领袖，他是中国共产党最早将武装斗争付诸实践并为之献出生命的革命家中的一位。
             </article>  
          <div  className="a next" onClick={()=>{handleClick1()}} >
            <span>下一页</span> 
         </div>
         <div  className="a last" onClick={()=>{handleClick2()}} >
            <span>上一页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default Second;