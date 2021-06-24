import React from 'react'
import ProductNav from '../productNav/productNav'
import './modelYpage.css'
import LandingPageTitlesWhite from '../../components/landingPageTitlesWhite/landingPageTitlesWhite'

const ModelYpage = () => {
    let product = "Model Y"
    let productSubHeading = "Plaid"
    let navLinkColor = 'white'

    return (
        <div className="modelYpage-container">
            <ProductNav color={navLinkColor}/>
            <LandingPageTitlesWhite product={product} productSubHeading={productSubHeading} color={navLinkColor}/>

              <ul className="modelY-specs">
                <ul>
                    <li>68cu ft</li>
                    <p>Cargo Space</p>
                </ul>                
                <ul>
                    <li>326 mi</li>
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

export default ModelYpage;