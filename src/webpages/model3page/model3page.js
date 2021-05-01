import React from 'react'
import ProductNav from '../productNav/productNav'
import "./model3page.css"
import LandingPageTitlesWhite from '../../components/landingPageTitlesWhite/landingPageTitlesWhite'

const Model3page = () => {
    let product = "Model 3"
    let productSubHeading = "Plaid"
    return (
        <div className="model3page-container">
            <ProductNav />
            <LandingPageTitlesWhite product={product} productSubHeading={productSubHeading} />

            <div className="chatIconContainer">
            </div>      
            <ul className="model3-specs">
                <ul>
                    <li>3.1s</li>
                    <p>0-60 mph*</p>
                </ul>                
                <ul>
                    <li>353 mi</li>
                    <p>Range (EPA est.)</p>
                </ul>
                <ul>
                    <li>AWD</li>
                    <p>Dual Motor</p>
                </ul>

                <ul className="orderNowBtn">ORDER NOW</ul>

            </ul>
        </div>
    )
}

export default Model3page;
