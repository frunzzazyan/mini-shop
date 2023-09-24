import { useState } from 'react'
import './Calc.css'


const Calc = () => {
    const [num, setNum] = useState('')

const handleClick = (e) =>{
    if(e.target === e.currentTarget)return
    setNum(n=>n + e.target.value)
}
console.log(num)

  return (
    <div className='calculiator'>
        <div className="div-result">
            <h3>{num}</h3>
        </div>
        <div className="div-items">
            <div onClick={handleClick}  className="div-numbers">
                {new Array(10).fill(null).map((_,idx)=>{
                    return <button value={idx} key={idx} className="btn-number">{idx}</button>
                })}
                <button>"</button>
            </div>
            <div onClick={handleClick} className="operators">
                <button value={'+'}>+</button>
                <button value={'-'}>-</button>
                <button value={'*'}>*</button>
                <button value={'/'}>/</button>
                <button onClick={()=>{
                    console.log(+num)
                }} value={'='}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calc