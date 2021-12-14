import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Sixth(){
    const handleClick1 =()=>{
        Router.push('/sixth2')
     }
     const handleClick2 =()=>{
      Router.push('/fifth2')
   }
   return(
      <div className="bac6">
             <article className="art">
                当日上午11时，
                大会正要宣布开始，预先化装混杂在群众中的刘湘21军所属之师3师王陵基部和7师蓝文彬部士兵，
                以及巴县团阀中文英、曹燮阳所属民团团丁，便开枪挥刀舞棍进行血腥大屠杀，一直持续到下午二时左右，打死137人，伤千余人。
               
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
 
    
   
  export default Sixth;