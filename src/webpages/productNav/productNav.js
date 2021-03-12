import React from 'react'
import "./productNav.css"
import { Link} from 'react-router-dom';


const ProductNav = () => {


    return (
        <div className="productNav-container">
            <nav className="productNav">
                <section className="navLeft">
                  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"> <img src="images/tesla_logo_txt.jpg" className="teslaLogoTxt" alt="T E S L A"></img> </Link>
                </section>
                
                <section className="navCenter">
                    <div className="navCenter-inner">
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/models">MODEL S</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/model3">MODEL 3</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modelx">MODEL X</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modely">MODEL Y</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarroof">SOLAR ROOF</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarpanels">SOLAR PANELS</Link></li>
                    </div>
  

                </section>
                <section className="navRight">
                    <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">SHOP</Link></li>
                    <li className="tslaAccountBtn"><a style={{"color": "inherit", "text-decoration": "none"}}href="https://github.com/charleswfloyd3/Tesla-Clone" target="_blank">TESLA CLONE</a></li>
                    <li className="hamburgerNavLanding" id="hamburgerNavLanding">&#9776;</li>

                </section>
                <section className="landingDropdownNav">
                    <li className="hamburgerNavLandingDropdown" id="hamburgerNavLandingDropdown">&#9776;</li>

                    </section>    
            </nav>
        </div>
    )
}

export default ProductNav;
