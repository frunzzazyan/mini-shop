import { Link } from 'react-router-dom'
import './HeaderSite.css'
import { MdAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
const HeaderSite = () => {
  const [style,setStyle] = useState(false)
  return (
    <>
    <header>
        <h3 className="logo">
            MiniStore.
        </h3>
        <ul>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/shop'><li>SHOP</li></Link>
            
            <Link to='/about'><li>ABOUT</li></Link>
            <Link to='/blogs'><li>BLOGS</li></Link>
            <Link to='/contact'><li>CONTACT</li></Link>
        </ul>
        

        <div className="icons">
            <Link to='/cart'><MdAddShoppingCart /></Link>
            <Link to='/profile'><CgProfile /></Link>
            <IoSearchSharp onClick={()=>{
                setStyle(!style)
            }} />
            
        </div>
       
        
    </header>
    </>
  )
}

export default HeaderSite