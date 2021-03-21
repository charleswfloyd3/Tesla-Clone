import React, { useState } from 'react'
import "./landingPageNav.scss"
import { Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const LandingPageNavbar = () => {
    let product1 = React.useRef(null)
    let product2 = React.useRef(null)
    let product3 = React.useRef(null)
    let product4 = React.useRef(null)
    const [mobileHamburgerStatus, setmobileHamburgerStatus] = useState('close')
    const [sidebarMenu, setsidebarMenu] = useState("sidebarMenu")
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
                        <li className="burgerMenu-container"  onClick={() =>{if(mobileHamburgerStatus === "close"){setmobileHamburgerStatus('open')}else{setmobileHamburgerStatus('close')}}}>
                            <i className={mobileHamburgerStatus}></i>
                            <i className={mobileHamburgerStatus}></i>
                            <i className={mobileHamburgerStatus}></i>

                        </li>
                </section>
                <section className="landingDropdownNav">
         
                    <div className="burgerMenu-container-mobile" onClick={() =>{if(mobileHamburgerStatus === "close"){setmobileHamburgerStatus('open') 
                    setsidebarMenu("sidebarMenuVisible")}else{setmobileHamburgerStatus('close')
                    setsidebarMenu("sidebarMenu")}}}>
                        <i className={mobileHamburgerStatus}></i>
                        <i className={mobileHamburgerStatus}></i>
                        <i className={mobileHamburgerStatus}></i>

                    </div>
            </section>
            <section className={sidebarMenu}>
                <li id="firstItemSidebar">EXISTING INVENTORY</li>
                <li>USED INVENTORY</li>
                <li>TRADE-IN</li>
                <li>CYBERTRUCK</li>
                <li>ROADSTER</li>
                <li>SEMI</li>
                <li>CHARGING</li>
                <li>POWERWALL</li>
                <li>COMMERCIAL SOLAR</li>
                <li>TEST DRIVE</li>
                <li>FIND US</li>
                <li>SUPPORT</li>
                <li>UNITED STATES</li>

            </section>    
            </nav>
        </div>
    )
}

export default LandingPageNavbar;
