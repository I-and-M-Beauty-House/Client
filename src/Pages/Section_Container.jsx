import React from 'react'
import Home from './Home/Home'
import Category from './Category/Category'
import About from './About/About'
import Contact from './ConatctUs/Contact'
import SubCategory from './Sub_Category/SubCategory'


export default function Section_Container() {
    return (
        <div>
            <Home />
            <Category />
            <About />
            <Contact />
            <SubCategory/>

        </div>
    )
}
