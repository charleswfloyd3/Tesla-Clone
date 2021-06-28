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
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/models"  ref={product1} onClick={keepTrackOfProductClicks}>Model S</Link ></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/model3" ref={product2} onClick={keepTrackOfProductClicks}>Model 3</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modelx" ref={product3} onClick={keepTrackOfProductClicks}>Model X</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modely"  ref={product4} onClick={keepTrackOfProductClicks}>Model Y</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarpanels">Solar Roof</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarpanels">Solar Panels</Link></li>
                    </div>
  

                </section>
                <section className="navRight">
                    <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">Shop</Link></li>
                    <li className="tslaAccountBtn"><a style={{"color": "inherit", "text-decoration": "none"}}href="https://github.com/charleswfloyd3/Tesla-Clone" target="_blank" rel="noreferrer">Telsa Clone</a></li>
                        <li className="menuBtn" onClick={() =>{if(sidebarMenu === "sidebarMenu"){
                    setsidebarMenu('sidebarMenuVisible')}else{
                    setsidebarMenu("sidebarMenu")}}}>
                           Menu
                        </li>
                </section>
                <li className="menuBtnMobile" onClick={() =>{if(sidebarMenu === "sidebarMenu"){
                    setsidebarMenu('sidebarMenuVisible')}else{
                    setsidebarMenu("sidebarMenu")}}}>
                           Menu
                </li>               
            <section className={sidebarMenu}>
                <div className="sidebarContainer">
                    <p className="xBtn" onClick={()=>{setsidebarMenu("sidebarMenu")}}>&#10006;</p>
                    <li id="firstItemSidebar">Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Trade-In</li>
                    <li>Cybertruck</li>
                    <li>Roadster</li>
                    <li>Semi</li>
                    <li>Charging</li>
                    <li>Powerwall</li>
                    <li>Commercial Energy</li>
                    <li>Utilities</li>
                    <li>Find Us</li>
                    <li>Support</li>
                    <li>United States</li>
                </div>
            </section>
    
            </nav>
        </div>
    )
}

export default LandingPageNavbar;
