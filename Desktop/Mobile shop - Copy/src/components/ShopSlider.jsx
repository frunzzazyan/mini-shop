import React, { Component } from "react";
import Slider from "react-slick";

import { photos } from "./DATA/photos";

import './ShopSlider.css'
import { Link } from "react-router-dom";

export let data = ''

export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="shop-items">
        <h2> Products</h2>
        <Slider className="sli" {...settings}>

        
       
         {photos.map((elem,idx)=>{ 
          return <div key={crypto.randomUUID()} className="div-shop">
            <div className="div-block">
                {elem.map((val,idx)=>{
                  return <div key={crypto.randomUUID()} dataset-n={idx} className="block-shop">
            <img src={val.url} alt="" />
            <Link to='product-val'>
            <button onClick={()=>{
              data = val
          }}>Click Me</button>
          </Link>
          </div>
                })}
          </div>
          </div>
         })} 

        </Slider>
      </div>
    );
  }
}
