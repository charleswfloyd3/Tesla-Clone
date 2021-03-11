import React from 'react'
import "./shopNav.css"
import {Link} from 'react-router-dom';


const ShopNav = () => {
    const RefreshPage = () =>{
        window.location.reload(false)
    }


    return (
        <div className="shopNav-container">
            <nav className="shopNav">
                <section className="shopNavLeft">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><img src="images/tesla_logo_txt.jpg" className="teslaLogoTxt" alt="T E S L A"></img></Link>
                    <li className="verticalBar"> | </li>
                    <li className="verticalBar" onClick={RefreshPage}>Shop</li>

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
                    <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">SIGN IN</Link></li>
                    <li className="hamburgerNavLanding">&#9776;</li>
                    <li className="hamburgerNavLanding">&#9776;</li>

                </section>
                <section className="shopDropdownNav">
                    <li className="hamburgerNavshopDropdown">&#9776;</li>

                    </section>    
            </nav>
        </div>
    )
}

export default ShopNav;
