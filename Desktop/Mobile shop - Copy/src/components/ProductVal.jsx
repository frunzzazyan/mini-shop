import './ProductVal.css'

import { data } from './ShopSlider'

export let cart = []

const ProductVal = () => {

function handleClick(){
  if(!cart.includes(data)){
    cart.push(data)
  }
}

  return (
    <>
        <div className="val-items">
            <div className="val-img">
                <img src={data.url} alt="" />
            </div>
            <div className="info">
                <h2>{data.name}</h2>
                <h4>{data.price}</h4>
                <h3 style={{color:data.color}}>{data.color}</h3>
                <p>{data.title}</p>
                <div className="btns">
                  <button onClick={()=>handleClick()}>ADD TO CART</button>
                  <button>BUY NOW</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductVal