import React from 'react'
import "./landingPageNav.css"
import { Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const LandingPageNavbar = () => {
    let product1 = React.useRef(null)
    let product2 = React.useRef(null)
    let product3 = React.useRef(null)
    let product4 = React.useRef(null)
    const modelSCounter = useSelector(state => state)
    const dispatch = useDispatch()
    const keepTrackOfProductClicks = () => {
        // console.log(product.current.innerHTML)
        if(product1.current.innerHTML == "MODEL S"){
                console.log("Model S was clicked")
                dispatch({type: "S_BTN"})
                console.log(modelSCounter.modelSbtnCounter)

        }
        
    }


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
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/models"  ref={product1} onClick={keepTrackOfProductClicks}>MODEL S</Link ></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/model3" ref={product2} onClick={keepTrackOfProductClicks}>MODEL 3</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modelx" ref={product3} onClick={keepTrackOfProductClicks}>MODEL X</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modely"  ref={product4} onClick={keepTrackOfProductClicks}>MODEL Y</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarroof">SOLAR ROOF</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarpanels">SOLAR PANELS</Link></li>
                    </div>
  

                </section>
                <section className="navRight">
                    <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">SHOP</Link></li>
                    <li className="tslaAccountBtn"><a style={{"color": "inherit", "text-decoration": "none"}}href="https://github.com/charleswfloyd3/Tesla-Clone" target="_blank" rel="noreferrer">TESLA CLONE</a></li>
                    <li className="hamburgerNavLanding" id="hamburgerNavLanding">&#9776;</li>

                </section>
                <section className="landingDropdownNav">
                    <li className="hamburgerNavLandingDropdown" id="hamburgerNavLandingDropdown">&#9776;</li>

                    </section>    
            </nav>
        </div>
    )
}

export default LandingPageNavbar;
