import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./solarRoof.css"
const SolarRoof = () => {
    let product = "Solar for New Roofs"
    let productSubHeading = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
    let btn1txt = "ORDER NOW"
    let btn2txt = "LEARN MORE"
    return (
        <div className="solarRoof-container">
            
            <LandingPageTitles product={product} subHeading={productSubHeading}/>
            <LandingPageBtns btn1txt={btn1txt} btn2txt={btn2txt} />

        </div>
    )
}

export default SolarRoof;
