import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Forth(){
    const handleClick1 =()=>{
        Router.push('/fifth')
     }
     const handleClick2 =()=>{
        Router.push('/third2')
     }
   return(
      <div className="bac2">
             <article className="art" >在骇人听闻的“三·三一”大惨案后，
                杨闇公同志不幸被捕，“你们只能砍下我的头，可绝不能丝毫动摇我的信仰。
                我的头可断，志不可夺。”
                这是杨闇公同志牺牲前痛斥敌人阴谋诡计的最后绝响，铿锵有力，发聋振聩。
                29岁的杨闇公同志用他短暂而壮烈的一生践行了他的人生格言，
                “人生如马掌铁，磨灭方休。
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
 
    
   
  export default Forth;