import React, { Component } from "react";
import seventh from "../css/seventh.module.css"
import Router from 'next/router'
function  Seventh(){
    const handleClick1 =()=>{
        Router.push('/seventh2')
     }
     const handleClick2 =()=>{
      Router.push('/sixth2')
   }
   return(
      <div className="bac7">
             <article className={seventh.article} >
             这是杨闇公烈士牺牲五天后，他的父亲杨淮清先生率领家人祭奠他时所作并诵的祭文。
             杨闇公是中国共产主义运动的先驱者，是一位具有坚定的共产主义信仰，坚强的无产阶级意志，和大无畏英雄气概的共产党人。
             杨闇公牺牲之壮烈，在中国共产党的历史上让人肃然起敬。
       
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