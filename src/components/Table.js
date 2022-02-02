import React from "react";

let arr =[]
for(let i=0;i<32;i++){arr.push(i)}

function isPrime(num) {
    if(num==0||num==1){return false}
    for(var i = 2; i < num; i++)
      if(num % i === 0) {return false};
      return true;
  }

  function getRndInteger() {
    return Math.floor(Math.random() * (10) ) + 1;
  }

function random(){
  this.innerHTML+= getRndInteger()
}

const Table =(props)=>{
 return (
    <div className={props.class} onClick={random} >
        {props.num}
    </div>
    )
}
 export  {Table,arr,isPrime};