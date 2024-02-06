import './Footer.css'
import { Link } from 'react-router-dom'
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <footer>
        <div className="block1 block">
            <h2>MiniStore.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem natus dolorem explicabo corporis in est accusantium! Culpa tempora quo quas.</p>
            <div className="contact-logo">
            <FiInstagram />  
            <CiFacebook />  
            <CiLinkedin />
            <CiTwitter />
            </div>
        </div>
        <div className="block2 block">
          <ul className='footer-link'>
            <h3>QUICK LINKS</h3>
            <br />
            <Link><li>HOME</li></Link>
            <Link><li>ABOUT</li></Link>
            <Link><li>SHOP</li></Link>
            <Link><li>BLOGS</li></Link>
            <Link><li>CONTACT</li></Link>
          </ul>
        </div>
        <div className="block3 block">
          <ul className='help-info'>
          <h3>HELP & INFO</h3>
          <br />
            <Link><li>TRACK YOUR ORDER</li></Link>
            <Link><li>RETURNS POLICIES</li></Link>
            <Link><li>SHIPPING + DELIVERY</li></Link>
            <Link><li>CONTACT US</li></Link>
            <Link><li>FAQS</li></Link>
          </ul>
        </div>
        <div className="block4 block">
          <div className="contact">
          <h3>CONTACT US</h3>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <a href="#">yourinfo@gmail.com</a>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <a href="#">+374842893</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer