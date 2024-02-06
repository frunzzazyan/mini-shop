import React from 'react'
import Advertisement from './Advertisement'

import './About.css'

const About = () => {
  return (
    <>
    <div className="items-about">

        <h1 className='page-name'>ABOUT US</h1>
        <Advertisement/>
        <div className="paragrph">
          <div className="image-about">
            <img src="https://demo.templatesjungle.com/ministore/images/single-image3.jpg" alt="" />
          </div>
          <div className="btn-p">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet, nam laborum cupiditate earum unde facere quos sit repellat distinctio consectetur totam saepe. Illo, consequuntur! Reprehenderit unde nam aperiam porro necessitatibus, repellat dolores molestiae cumque vel laudantium sequi. Deserunt aspernatur atque rem enim sapiente facilis. Impedit sed debitis at accusantium.</p>
          <button>SHOP OUT STORE</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default About