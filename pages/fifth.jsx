import React, { Component } from "react";
import second from "../css/second.module.css"
import Router from 'next/router'
function  Fifth(){
   
   const handleClick1 =()=>{
      Router.push('/fifth2')
   }
   const handleClick2 =()=>{
    Router.push('/forth')
 }
   return(
      <div className="bac5">
             <article className="art" style={{left:"550px",}}>
                三·三一惨案，是发生在重庆市的一起国民党反动派武装残酷镇压重庆各界人民群众爱国集会而制造的大惨案，因事发1927年3月31日，故称三·三一惨案。
                1927年3月24日，北伐军攻占南京，当地民众举行庆祝集会，遭到英国军舰开炮轰击，打死打伤2000余人。 [1]               
            </article>  
            <img src="http://pic.heiheiyun.top/331.png" alt="" className="yangpic3" />
          <div  className="a next" onClick={()=>{handleClick1()}} >
            <span>下一页</span> 
         </div>
         <div  className="a  last" onClick={()=>{handleClick2()}} >
            <span>上一页</span> 
         </div>
      </div>
    )
}
 
    
   
  export default Fifth;