import React from 'react'
import "./landingPageNav.css"

const LandingPageNavbar = () => {
    return (
        <div className="landingPageNav-container">
            <nav className="landingPageNav">
                <section className="navLeft">
                    <img src="images/tesla_logo_txt.jpg" className="teslaLogoTxt"></img>
                </section>
                
                <section className="navCenter">
                    <div className="navCenter-inner">
                        <li>MODEL S</li>
                        <li>MODEL 3</li>
                        <li>MODEL X</li>
                        <li>MODEL Y</li>
                        <li>SOLAR ROOF</li>
                        <li>SOLAR PANELS</li>
                    </div>
  

                </section>
                <section className="navRight">
                    <li>SHOP</li>
                    <li className="tslaAccountBtn">TESLA ACCOUNT</li>
                    <li className="hamburgerNavLanding">&#9776;</li>

                </section>
                <section className="landingDropdownNav">
                    <li className="hamburgerNavLandingDropdown">&#9776;</li>

                    </section>    
            </nav>
        </div>
    )
}

export default LandingPageNavbar;
