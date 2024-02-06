import { useState } from 'react';
import './Cart.css'
import { cart } from './ProductVal'
import { IoCloseSharp } from "react-icons/io5";
import Count , {number} from './Count';

const Cart = () => {

  const [close, setClose] = useState(true)
  const [prc, setPrc] = useState(0)
  const [p, setP] = useState(0)



 
  return (
    <>
    <div className="cart">
      {cart.map(elem=>{ 
        if(elem.active){
        return  <div className='list' key={crypto.randomUUID()}>
          <div className="img-cart">
            <img src={elem.url} alt="" />
          </div>
          <div className="text-cart">
            <h3>{elem.name}</h3>
            <h4>{elem.price}$</h4>
          </div>
          <div className="count">
                    <Count price={elem.price} />
          </div>
          <div className="price">
            <h1>{elem.number}$</h1>
            <button onClick={()=>{
              setPrc(p=>p=number)
              elem = Object.assign(elem, {number:number})
            }}>Show Price</button>
          </div>

          <div className="close">
          <IoCloseSharp onClick={()=>{
            elem.active = false
            setClose(!close)
            
          }}/>
          </div>
        </div>
    }
      })}
      </div>

      <div className="buy-product">
        <h1>CART TOTALS</h1>
        <h4>shipment - {p/2/2/2}$</h4>
        <h4>price - {p}$</h4>
        <div className="show-buy">
          <button onClick={()=>{
            if(p!== 0)setP(0)
            cart.map(elem=>{
              setP(p=>p+elem.number)
              console.log(elem.number)

            })
          }}>Show Price</button>
          <button>Buy</button>
        </div>


      </div>
    </>
  )
}

export default Cart