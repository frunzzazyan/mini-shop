import { Link } from 'react-router-dom';
import './Shop.css'
import ShopSlider from './ShopSlider'
import { GoSearch } from "react-icons/go";
const Shop = () => {
  return (
    <>
    <div id="shop">
        <h1>SHOP</h1>
        <div className="product">
            <div className="slider-shop">
                <ShopSlider/>
            </div>
            <div className="filter">
              <div className="search">
                <input type="text" placeholder='Search' />
                <input id='submit' type="submit" value='Search' />
              </div>
              <ul className='shop-ul'>
                <h3>CATEGORIES</h3>
                <Link><li>All</li></Link>
                <Link><li>Phones</li></Link>
                <Link><li>Accessories</li></Link>
                <Link><li>Tablets</li></Link>
                <Link><li>Watches</li></Link>
              </ul>
              <ul className='shop-ul'>
                <h3>TAGS</h3>
                <Link><li>White</li></Link>
                <Link><li>Cheap</li></Link>
                <Link><li>Mobile</li></Link>
                <Link><li>Modern</li></Link>
              </ul>
              <ul className='shop-ul'>
                <h3>FILTER BY PRICE</h3>
                <Link><li>Less than $10</li></Link>
                <Link><li>$10- $20</li></Link>
                <Link><li>$20- $30</li></Link>
                <Link><li>$30- $40</li></Link>
                <Link><li>$40- $50</li></Link>
              </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop