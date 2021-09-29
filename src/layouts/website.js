import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import Slider from '../componets/Slider';
const LayoutWebsite = (props) => {
    console.log(props);
    return (
        <div className="row">
            <Header {...props}/>
            <Slider/>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default LayoutWebsite
