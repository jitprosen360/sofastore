import React from "react";
import Footer from "../Components/Footer/Footer";
import Logo from './../assets/logo.png';
import styled from 'styled-components';


const MainLayout = props => {
    return(
        <div>
        <img className="logo" src={Logo} alt="Logo" />

        <div className='main'>
        {props.children}
        </div>
        <Footer />
        </div>
    )
}
export default MainLayout;
