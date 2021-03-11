import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./modelXpreview.css"
const ModelXpreview = () => {
        let product = "Model X"
    let productSubHeading = "Order Online for Touchless Delivery"
    return (
        <div className="modelXpreview-container">
            <LandingPageTitles product={product} subHeading={productSubHeading}/>
            <LandingPageBtns />
        </div>
    )
}

export default ModelXpreview;