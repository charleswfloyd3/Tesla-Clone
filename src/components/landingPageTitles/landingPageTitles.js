import React from 'react'
import AOS from 'aos';

import "./landingPageTitles.css"
const LandingPageTitles = (props) => {

    return (
        <div className="landingPageTitles" >
            <div className="landingPageTitles-inner">
                <p className="productTitle" >{props.product}</p>
                <p className="productSubHeading" data-aos="fade-in" data-aos-duration="1200">{props.subHeading}</p>
            </div>
        </div>
    )
}

export default LandingPageTitles;
