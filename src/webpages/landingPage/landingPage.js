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

const LandingPage = () => {
    return (
        <div className="landingPage">
            <LandingPageNavbar />
            <ModelSpreview />
            <ModelYpreview />
            <Model3preview /> 
            <ModelXpreview />
            <SolarPanels />
            <SolarRoof />
            <Accessories />
            <Footer />
        </div>
    )
}

export default LandingPage;
