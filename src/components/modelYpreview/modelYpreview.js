import React from 'react'
import { LandingPageBtns } from '../landingPageBtns/landingPageBtns'
import LandingPageTitles from '../landingPageTitles/landingPageTitles'
import "./modelYpreview.css"
const ModelYpreview = () => {
    let product = "Model Y"
    let productSubHeading = "Order Online for Touchless Delivery"
    return (
        <div className="modelYpreview-container">
            <LandingPageTitles product={product} subHeading={productSubHeading} />
            <LandingPageBtns />
        </div>
    )
}

export default ModelYpreview;