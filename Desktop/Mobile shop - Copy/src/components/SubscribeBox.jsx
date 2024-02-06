import './SubscribeBox.css'

const SubscribeBox = () => {
  return (
    <div id='box'>
        <div className="box-text">
            <h1>SUBSCRIBE US NOW</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae.</p>
        </div>
        <div className="box-input">
            <input type="email" placeholder='Your email address here' />
            <input type="submit" value='SUBSCRIBE'  />
        </div>
    </div>
  )
}

export default SubscribeBox