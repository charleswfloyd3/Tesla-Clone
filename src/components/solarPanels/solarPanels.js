import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./solarPanels.css"
const SolarPanels = () => {
    let product = "Lowest Cost Solar Panels in America"
    let productSubHeading = "Money-back guarantee"
    let btn1txt = "ORDER NOW"
    let btn2txt = "LEARN MORE"
    return (
        <div className="solarPanels-container">
            
            <LandingPageTitles product={product} subHeading={productSubHeading}/>
            <LandingPageBtns btn1txt={btn1txt} btn2txt={btn2txt} />

        </div>
    )
}

export default SolarPanels;
