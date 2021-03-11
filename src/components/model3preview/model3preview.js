import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./model3preview.css"
const Model3preview = () => {
    let product = "Model 3"
    let productSubHeading = "Order Online for Touchless Delivery"
    let btn1txt = "CUSTOM ORDER"
    let btn2txt = "EXISTING INVENTORY"
    return (
        <div className="model3preview-container">
            <LandingPageTitles product={product} subHeading={productSubHeading} />
            <LandingPageBtns btn1txt={btn1txt} btn2txt={btn2txt} />

        </div>
    )
}

export default Model3preview;