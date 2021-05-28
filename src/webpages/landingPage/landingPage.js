import React from 'react'

import ModelYpreview from '../../components/modelYpreview/modelYpreview';
import ModelSpreview from '../../components/modelSpreview/modelSpreview';
import Model3preview from '../../components/model3preview/model3preview';
import ModelXpreview from '../../components/modelXpreview/modelXpreview';
import LandingPageNavbar from '../../components/landingPageNavbar/landingPageNav';
import SolarPanels from '../../components/solarPanels/solarPanels';
import Accessories from '../../components/accessories/accessories';
import SolarRoof from '../../components/solarRoof/solarRoof';
import Footer from '../../components/footer/footer';
import LazyLoad from 'react-lazyload';

const LandingPage = () => {
    return (
        <div className="landingPage">
            <LandingPageNavbar />
            <ModelSpreview />
            <LazyLoad>
                <ModelYpreview />
            </LazyLoad>
            <LazyLoad>
                <Model3preview />
            </LazyLoad> 
            <LazyLoad>
                <ModelXpreview />
            </LazyLoad>
            <LazyLoad>
                <SolarPanels />
            </LazyLoad>
            <LazyLoad>
                <SolarRoof />
            </LazyLoad>
            <LazyLoad>
                <Accessories />
            </LazyLoad>
            <LazyLoad>
                <Footer />
            </LazyLoad>

        </div>
    )
}

export default LandingPage;
