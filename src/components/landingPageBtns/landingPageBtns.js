import React from 'react'
import "./landingPageBtns.css"
export const LandingPageBtns = (props) => {
    return (
        <div className="landingPageBtns-container">
            <div className="landingPageBtns">
                <button className="landingPageBtn1">{props.btn1txt}</button>
                <button className="landingPageBtn2">{props.btn2txt}</button>

            </div>
        </div>
    )
}
