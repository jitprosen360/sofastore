import React from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import men from '../../assets/men.jpg';
import women from '../../assets/women.jpg';

const Directory = props => {
    return(
       <div className="directory">
           <div className="container">
           <div className="row wrap">
               <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 item" >
                   <div style={{backgroundImage:`url(${men})`}}>
                   <h3><a>Shop Sofa</a></h3> 
                   </div>
                
               </div>
               <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 item2" >
                   <div style={{backgroundImage:`url(${women})`}}>
                   <h3><a>Shop Mattresses</a></h3> 
                   </div>
                   <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item2">
                   <div style={{backgroundImage:`url(${men})`}}>
                   <h3><a>Shop Beds</a></h3> 
                   </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item2">
                   <div style={{backgroundImage:`url(${women})`}}>
                   <h3><a>Shop Beds</a></h3> 
                   </div>
                    </div>
                   </div>
                  
                </div>
           </div>
      
       </div>
       </div>
    )
}
export default Directory;