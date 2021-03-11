import React from 'react'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./solarPanels.css"
const SolarPanels = () => {
        let product = "Lowest Cost Solar Panels in America"
    let productSubHeading = "Money-back guarantee"
    return (
        <div className="solarPanels-container">
            
            <LandingPageTitles product={product} subHeading={productSubHeading}/>
        </div>
    )
}

export default SolarPanels;
