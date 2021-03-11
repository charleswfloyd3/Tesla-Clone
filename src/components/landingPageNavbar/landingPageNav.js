import React from 'react'
import "./landingPageNav.css"
import { Link} from 'react-router-dom';


const LandingPageNavbar = () => {
    const RefreshPage = () =>{
        window.location.reload(false)
    }

    return (
        <div className="landingPageNav-container">
            <nav className="landingPageNav">
                <section className="navLeft">
                    <img src="images/tesla_logo_txt.jpg" className="teslaLogoTxt" alt="T E S L A"onClick={RefreshPage}></img>
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
                    <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">SHOP</Link></li>
                    <li className="tslaAccountBtn">T3SLA CLONE</li>
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
