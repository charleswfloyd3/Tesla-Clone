import React from 'react'
import LandingPageTitles from '../../components/landingPageTitles/landingPageTitles'
import ProductNav from '../productNav/productNav'
// import "./modelSpage.css"

const ModelSpage = () => {
    let product = "Model S"
    let productSubHeading = "Plaid"
    return (
        <div className="modelSpreview-container">
            <ProductNav />
            <LandingPageTitles product={product} productSubHeading={productSubHeading} />
            <p className="productSubHeading-S">Plaid</p>
        </div>
    )
}

export default ModelSpage;