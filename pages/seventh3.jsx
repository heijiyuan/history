import React, { Component } from "react";
import seventh from "../css/seventh.module.css"
import Router from 'next/router'
function  Seventh(){
    const handleClick1 =()=>{
        Router.push('/eigth')
     }
     const handleClick2 =()=>{
      Router.push('/seventh2')
   }
   return(
      <div className="bac7">
             <article className={seventh.article}>
             1987年为杨闇公牺牲50周年题词“杨闇公烈士永垂不朽”并为杨闇公烈士陵园题名。
             1987年，杨尚昆同志题词“仰缅先烈，寄望后人”。杨尚昆、江泽民、李鹏、刘伯承、聂荣臻、吴玉章、廖汉生等同志先后为他作文、题词、赋诗。
             2009年，杨闇公入选100位为新中国成立作出突出贡献的英雄模范人物。
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