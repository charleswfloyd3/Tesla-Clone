import React from 'react'
import "./productNav.css"
import { Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const ProductNav = (props) => {
    const modelSCounter = useSelector(state => state)
    const dispatch = useDispatch()
    const modelSbuttonProductNav = () =>{
    console.log(modelSCounter.modelSbtnCounter)
    dispatch({type: "S_BTN"})
    }
    return (
        <div className="productNav-container" style={{color:props.color}}>
            <nav className="productNav">
                <section className="navLeft">
                  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"> <img src={props.color == 'white'?"images/teslawhite.png": "images/tesla_logo_txt.jpg" } className="teslaLogoTxt" alt="T E S L A"></img> </Link>
                </section>
                
                <section className="navCenter" >
                    <div className="navCenter-inner">
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/models" onClick={modelSbuttonProductNav}>Model S</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/model3">Model 3</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modelx">Model X</Link></li>
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modely">Model Y</Link></li>
                        {/* <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarroof">SOLAR ROOF</Link></li> */}
                        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/solarpanels">Solar Panels</Link></li>
                    </div>
  

                </section>
                <section className="navRight" >
                    <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">Shop</Link></li>
                    <li className="tslaAccountBtn"><a style={{"color": "inherit", "text-decoration": "none"}}href="https://github.com/charleswfloyd3/Tesla-Clone" target="_blank" rel="noreferrer">Tesla Clone</a></li>
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
