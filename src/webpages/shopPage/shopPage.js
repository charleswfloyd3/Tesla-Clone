import React from 'react'
import Lifestyle from '../../shopComponents/lifestyle/lifestyle'
import { ShopHome } from '../../shopComponents/shopHome/shopHome'
import ShopNav from '../../shopComponents/shopNav/shopNav'
import './shopPage.css'
export const ShopPage = () => {
    return (
        <div>
            <ShopNav />
            <ShopHome />
            <div className="shopPageProducts">
            {/* <Lifestyle /> */}
            
            </div>
        </div>
    )
}
