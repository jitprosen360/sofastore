import React from "react";
import Footer from "../Components/Footer/Footer";
import Logo from './../assets/logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const MainLayout = props => {
    return(
        <div>
             <Link to="/">
                    <img className="logo" src={Logo} alt="Logo" />
                    </Link>

        <div className='main'>
        {props.children}
        </div>
        <Footer />
        </div>
    )
}
export default MainLayout;
