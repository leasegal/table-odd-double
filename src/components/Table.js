import React from "react";



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
 export  {Table,isPrime};