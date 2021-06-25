import React from 'react'
import "./shopNav.css"
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ShopNav = () => {
    const RefreshPage = () =>{
        window.location.reload(false)
    }
    return (
        <div className="shopNav-container">
            <nav className="shopNav">
                <section className="shopNavLeft">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><img src="images/teslawhite.png" className="teslaLogoTxt" alt="T E S L A"></img></Link>
                    <li className="verticalBar"> | </li>
                    <li className="shop" onClick={RefreshPage}>SHOP</li>

                </section>
                
                <section className="shopNavCenter">
                    <div className="shopNavCenter-inner">
                        <li>CHARGING</li>
                        <li>VEHICLE ACCESSORIES</li>
                        <li>APPAREL</li>
                        <li>LIFESTYLE</li>
                    </div>

                </section>
                <section className="shopNavRight">
                    <li className="signin"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">SIGN IN</Link></li>
                    <li className="hamburgerNavLanding"><img src="images/searchIcon.png" className="searchIcon" alt="search"></img></li>
                    <li className="hamburgerNavLanding"><img src="images/cart.png" className="cartIcon" alt="search"></img></li>

                </section>
                <section className="shopDropdownNav">
                    <li className="hamburgerNavshopDropdown">
                        <i className="close"></i>
                        <i className="close"></i>
                        <i className="close"></i>
                    </li>
                </section>    
            </nav>
        </div>
    )
}
export default ShopNav;
