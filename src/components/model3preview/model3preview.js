import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./model3preview.css"
const Model3preview = () => {
    let product = "Model 3"
    let productSubHeading = "Order Online for Touchless Delivery"
    return (
        <div className="model3preview-container">
            <LandingPageTitles product={product} subHeading={productSubHeading} />
            <LandingPageBtns />
        </div>
    )
}

export default Model3preview;