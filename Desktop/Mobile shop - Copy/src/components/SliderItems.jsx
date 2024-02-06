import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import { cart } from "./ProductVal";

import './SliderItems.css'


export default class SimpleSlider extends Component {
  render() {

    console.log(this.props)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
      <div id="slider-items">
        <div className="name-link">
        <h2>{this.props.name}</h2>
        <a href="#">GO TO SHOP</a>
        </div>

        <Slider className="slider-c" {...settings}>

  {console.log(this.props.data)}

          {this.props.data.map(elem=>{
            return <div key={crypto.randomUUID()} className="slider-item">
                  {elem.map(elem=>{
                      return <div key={elem.id}  className="image">
                           <img src={elem.url} alt="" />
                            <button onClick={()=>cart.push(elem)}>Add TO Card</button>
                       </div>
                  
                  })}
              
                </div>
          })}
                
            {/* {this.props.data.map((elem,idx)=>{
              return
              
           
            })} */}

 </Slider>
</div> 
{/* 

          <div className="slider-item">
          
            <div className="image">
                <img src={this.props.data.brend.apple.image} alt="" />
                <button>Add TO Card</button>
        
                </div>
                <div className="image">
                <img src={this.props.data.brend.xiaomi.image} alt="" />
                <button>Add TO Card</button>
            
            </div>
            <div className="image">
                <img src={this.props.data.brend.huawei.image} alt="" />
                <button>Add TO CArd</button>
                
            </div>
            </div>
          <div className="slider-item">
          <div className="image">1</div>
          <div className="image">2</div>
          <div className="image">3</div>
          <div className="image">4</div>
          </div>
          <div className="slider-item">
            <div className="image">1</div>
            <div className="image">2</div>
            <div className="image">3</div>
            <div className="image">4</div>
          </div>
          
        */}
       
        </>
    );
  }
}