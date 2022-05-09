import React from "react";
import Footer from "../Components/Footer/Footer";
import Header  from '../Components/Header/Header';


const HomepageLayout = props => {
    return(
        <div>
        <Header {...props} />
        <div className='main'>
        {props.children}
        </div>
        <Footer />
        </div>
    )
}
export default HomepageLayout;

