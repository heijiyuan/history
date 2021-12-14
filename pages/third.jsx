import React, { Component } from "react";
import { Timeline } from 'antd';
import Router from 'next/router'
function  Third(){
    const handleClick1 =()=>{
        Router.push('/third2')
     }
     const handleClick2 =()=>{
        Router.push('/second')
     }
   return(
      <div className="bac3">
             <article  className="art">
             <Timeline className="art" > 
                 <Timeline.Item color="blue"><span>1917年，杨闇公同志东渡日本，求救国救民之道，回国后与吴玉章等在四川从事建党工作。</span></Timeline.Item>
                 <Timeline.Item color="red"><span>1925年加入中国共产党。</span> </Timeline.Item>
                 <Timeline.Item color="green"><span>1926年，任中共重庆地方执行委员会首任书记，领导四川国共合作，同年，与朱德、刘伯承、陈毅共同发动领导了顺泸起义。</span></Timeline.Item>
             </Timeline>                               
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
 
    
   
  export default Third;