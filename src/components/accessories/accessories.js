import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./accessories.css"
const Accessories = () => {
    let product = "Accessories"
    let productSubHeading = ""
    let btn1txt = "SHOP NOW"
    return (
        <div className="accessories-container">
            
            <LandingPageTitles product={product} subHeading={productSubHeading}/>
            <button className="landingPageBtn1-Accesories">{btn1txt}</button>

        </div>
    )
}

export default Accessories;
