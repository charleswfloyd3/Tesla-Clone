import React from 'react'
import './landingPageTitlesWhite.css'

const LandingPageTitlesWhite = (props) => {
    return (
        <div className="landingPageTitles">
            <div className="landingPageTitles-inner">
                <p className="productTitle">{props.product}</p>
                <p className="productSubHeading">{props.subHeading}</p>
            </div>
        </div>
    )
}

export default LandingPageTitlesWhite;
