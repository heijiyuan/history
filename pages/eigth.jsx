import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Eigth(){
    const handleClick1 =()=>{
        Router.push('/end')
     }
     const handleClick2 =()=>{
      Router.push('/seventh3')
   }
   return(
    <div  className={second.bac} >
     <div class="piclist">
        <div class="picbox">
                <div class="box front"><img src="http://pic.heiheiyun.top/yang1.png" alt=""/></div>
                <div class="box back"><h2>锦官城外建红旗，<br/>革命潮流卷华西。</h2></div>
            </div>
            <div class="picbox">
                <div class="box front"><img src="http://pic.heiheiyun.top/yang2.jpg" alt=""/></div>
                <div class="box back"><h2>为救万民于水火，<br/>不辞千里转成渝。</h2></div>
            </div>
            <div class="picbox">
                <div class="box front"><img src="http://pic.heiheiyun.top/yang3.jpg" alt=""/></div>
                <div class="box back"><h2>打枪坝上留英迹，<br/>扬子江中失健儿。</h2></div>
            </div>
            <div class="picbox">
                <div class="box front"><img src="http://pic.heiheiyun.top/yang4.jpg" alt=""/></div>
                <div class="box back"><h2>血沃鹃花红四野，<br/>巴山蜀水更神奇。</h2></div>
            </div>
     </div>
            
          <div  className="a next" onClick={()=>{handleClick1()}} >
            <span>下一页</span> 
         </div>
         <div  className="a  last" onClick={()=>{handleClick2()}} >
            <span>上一页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default Eigth;