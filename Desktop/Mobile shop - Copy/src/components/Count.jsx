import React from 'react'
import { useState } from 'react';
export let number = 0;

const Count = ({price}) => {
    
  const [count,setCount] = useState(0)
  const [num, setNum] = useState(+price)
  return (
    <>
        <button onClick={()=>{
                          if(count == 0) return 
                          setCount(c=>c-1)
                          setNum(n=>n-=+price)
                          number = num
                    }}>-</button>
                <span>{count}</span>
                    <button onClick={()=>{
                          setCount(c=>c+1)
                          setNum(n=>n+=+price)
                          number = num
                    }}>+</button>
    </>
  )
}

export default Count