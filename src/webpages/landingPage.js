import React from 'react'
import ModelYpreview from '../components/modelYpreview/modelYpreview';
import ModelSpreview from '../components/modelSpreview/modelSpreview';
import Model3preview from '../components/model3preview/model3preview';
import ModelXpreview from '../components/modelXpreview/modelXpreview';
import LandingPageNavbar from '../components/landingPageNavbar/landingPageNav';
import SolarPanels from '../components/solarPanels/solarPanels';

const LandingPage = () => {
    return (
        <div className="landingPage">
            <LandingPageNavbar />
            <ModelSpreview />
            <ModelYpreview />
            <Model3preview /> 

            <ModelXpreview />
            <SolarPanels />
        </div>
    )
}

export default LandingPage;
