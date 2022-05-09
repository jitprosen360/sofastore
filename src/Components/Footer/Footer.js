import React from "react";
import styled from 'styled-components';


const Footer = props => {
    return(
        <Foot>
       <div className="footer">
        <div className="wrap">
            @sofaDirect 2022
        </div>
       </div>
       </Foot>
    )
}
export default Footer;

const Foot = styled.div`
.footer { bottom:0; padding-top:50px;}

`