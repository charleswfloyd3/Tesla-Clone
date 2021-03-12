import React from 'react'
import LandingPageTitles from '../../components/landingPageTitles/landingPageTitles'
import ProductNav from '../productNav/productNav'
import "./modelSpage.css"

const ModelSpage = () => {
    let product = "Model S"
    let productSubHeading = "Plaid"
    return (
        <div className="modelSpage-container">
            <ProductNav />
            <LandingPageTitles product={product} productSubHeading={productSubHeading} />
            <p className="productSubHeading-S">Plaid</p>
            <ul className="modelS-specs">
                <ul>
                    <li>390mi</li>
                    <p>Range (est.)</p>
                </ul>                
                <ul>
                    <li>1.99s</li>
                    <p>0-60 mph*</p>
                </ul>
                <ul>
                    <li>200mph</li>
                    <p>Top Speed</p>
                </ul>
                <ul>
                    <li>1,020hp</li>
                    <p>Peak Power</p>
                </ul>

                <ul className="orderNowBtn">ORDER NOW</ul>

            </ul>
        </div>
    )
}

export default ModelSpage;