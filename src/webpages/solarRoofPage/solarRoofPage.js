import React from 'react'
import ProductNav from '../productNav/productNav'
import solarRoofVideo from "./solarRoofVideo.mp4"
const SolarRoofPage = () => {
    return (
        <div >
            <ProductNav />

        <video className="solarRoofpage-container" autoPlay loop muted>

                <source src={solarRoofVideo} type='video/mp4' className="solarRoofPage-container"></source>
            </video>
            </div>
    )
}

export default SolarRoofPage;
