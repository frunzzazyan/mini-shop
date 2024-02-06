import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import './Slider.css'

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
      <div id="slider">
        <Slider className="items-slider" {...settings}>
          <div className="item-1">
                 <img src="https://www.canstarblue.com.au/wp-content/uploads/2022/09/Apple-Watches-2022.jpg" alt="" />
          </div>
          <div>
                 <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/07/apple-watch-not-iwatch.jpg" alt="" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}