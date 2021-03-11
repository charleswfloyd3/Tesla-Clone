import React from 'react'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import {Link} from 'react-router-dom';

import "./accessories.css"
const Accessories = () => {
    let product = "Accessories"
    let productSubHeading = ""
    let btn1txt = "SHOP NOW"
    return (
        <div className="accessories-container">
            
            <LandingPageTitles product={product} subHeading={productSubHeading}/>
            <button className="landingPageBtn1-Accesories"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/shop">{btn1txt}</Link></button>

        </div>
    )
}

export default Accessories;
