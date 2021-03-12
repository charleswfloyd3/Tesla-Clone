import React from 'react'
import LandingPageTitles from '../../components/landingPageTitles/landingPageTitles'
import ProductNav from '../productNav/productNav'
import "./modelXpage.css"

const ModelXpage = () => {
    let product="Model X"
    return (
        <div className="modelXpreview-container">
            <ProductNav />
            <LandingPageTitles product={product}/>
            <p className="productSubHeading-S">Plaid</p>

            <ul className="modelX-specs">
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

export default ModelXpage;