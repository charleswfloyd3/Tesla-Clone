import React from 'react'
import LandingPageTitles from '../../components/landingPageTitles/landingPageTitles'

import ProductNav from '../productNav/productNav'
import "./solarPanels.css"

const SolarPanelsPage = () => {
        let product = "Solar for Existing Roofs"
    let productSubHeading = "Plaid"
    return (
        <div className="solarPanels-container">
            <ProductNav />
            <LandingPageTitles product={product} productSubHeading={productSubHeading} />
        <p className="subHeadingSolar">Lowest Cost Solar Panels in America - Money-back guarantee</p>
              <ul className="solarPanels-specs">
                <ul>
                    <li>Convert Sunlight</li>
                    <p>into Energy</p>
                </ul>                
                <ul>
                    <li>Guaranteed</li>
                    <p>Lowest Price</p>
                </ul>
                <ul>
                    <li>24/7</li>
                    <p>Energy Monitoring</p>
                </ul>

                <ul className="orderNowBtn">ORDER NOW</ul>

            </ul>
        </div>
    )
}

export default SolarPanelsPage;
