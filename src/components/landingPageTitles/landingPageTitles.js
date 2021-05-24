import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import "./landingPageTitles.css"
const LandingPageTitles = (props) => {
AOS.init();

    return (
        <div className="landingPageTitles">
            <div className="landingPageTitles-inner">
                <p className="productTitle" data-aos="fade-up" data-aos-duration="800">{props.product}</p>
                <p className="productSubHeading" data-aos="fade-in" data-aos-duration="1200">{props.subHeading}</p>
            </div>
        </div>
    )
}

export default LandingPageTitles;
