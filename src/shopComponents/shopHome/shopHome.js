import React from 'react'
import './shopHome.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const ShopHome = () => {

const slideImages = [
  'images/wallCharger.jpg',
  'images/modelYliners.jpg',
];
    return (
        <div>
            <Slide>
            <div style={{'backgroundImage': `url(${slideImages[0]})`} } className="shopHomeWallCharger">
                <div className="shopHomeTitles">
                    <p className="wallChargerHeading">WALL CONNECTOR</p>
                    <p className="wallChargerSubheading">The fastest way to charge at home</p>
                </div>
                <div className="indicator-container">
                    <div className= "indicators">
                        <p className="indicator1-1"></p>
                        <p className="indicator2-1"></p>
                    </div>
                </div>
            </div>
            <div style={{'backgroundImage': `url(${slideImages[1]})`} }className="shopHomeModelYliners">
                <div className="shopHomeTitles">
                    <p className="wallChargerHeading">MODEL Y ALL-WEATHER INTERIOR LINER</p>
                    <p className="wallChargerSubheading">A clean interior, in any weather</p>
                </div>
                <div className="indicator-container">
                    <div className= "indicators">
                        <p className="indicator1-2"></p>
                        <p className="indicator2-2"></p>
                    </div>
                </div>
            </div>
            </Slide>
            {/* <div className="transitionSection">
            <p className="bestSellers">BEST SELLERS</p>
            <p className="shopAll">Shop All</p>

            </div> */}
        </div>
    )
}
