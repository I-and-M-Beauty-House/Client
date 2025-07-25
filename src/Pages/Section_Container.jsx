import React from 'react'
import Home from './Home/Home'
import Category from './Category/Category'
import About from './About/About'
import Contact from './ConatctUs/Contact'
import HairCategory from './Sub_Category/Hair_Category/HairCategory'
import NailCategory from './Sub_Category/Nail-category/NailCategory'
import SkinCareCategory from './Sub_Category/SkinCare_Category/SkinCareCategory'
import Makeup from './Sub_Category/Makup_Category/Makeup'



export default function Section_Container() {
    return (
        <div>
            <Home />
            <Category />
            <About />
            <Contact />
           <HairCategory/>
           <NailCategory/>
           <SkinCareCategory/>
           <Makeup/>

        </div>
    )
}
