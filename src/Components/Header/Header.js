import React from "react";
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {auth} from '../../firebase/utils'

const Header = props => {
    const {currentUser}= props; 
    return(
        <div className="container">
        <Headers className="header">
            <div className="wrap">
            </div>
            <nav class="navbar  navbar-expand-md  justify-content-between">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse dual-nav w-100">
    <form class="ml-3 my-auto d-inline w-100">
            <div class="input-group">
              <input type="text" class="form-control border-right-0" placeholder="Search" /> 
              <i class="fa fa-search"></i>
            </div>
        </form>
    </div>
    <a href="/" class="navbar-brand mx-auto d-block text-center w-100">   <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="Logo" />
                    </Link>
                   
                </div></a>
    <div class="navbar-collapse collapse dual-nav w-100">

            {currentUser && (
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                       <a class="nav-link"><span onClick={()=>auth.signOut()}>LogOut</span></a> 
                    </li>
                </ul>
            )}

            {!currentUser && (
                 <ul class="nav navbar-nav ml-auto">
                 <li class="nav-item">
                     <Link to="/login">
                         <a class="nav-link" href="#">Login</a>
                         </Link>
                     </li>
                     <li class="nav-item">
                     <Link to="/Registration">
                         <a class="nav-link" href="#">Register</a>
                     </Link>
                     </li>
                     
                 </ul>
            )}

       
    </div>
</nav>
            <nav class="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link to="/">
                    <a class="nav-link" href="#">Home</a>
                </Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Beds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Mattresses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sofa Beds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sale & Offers</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </Headers>
        </div>
    )
}

Header.defaultProps = {
    currentUser:null
}

export default Header;


const Headers = styled.div`
.header{
    height:150px;
}
.nav-item { padding-left:20px;}
.fa-search {color:#000; margin-left: -46px!important;
    z-index: 1;
    margin-top: 6px;}
.input-group { width:80%;}
.form-control{ border:1px solid #000!important; border-radius:30px;border-radius-right:30px;
    border-top-right-radius:30px!important;
    border-bottom-right-radius:30px!important}
.nav-link {
    font-size:17px;
    text-decoration:none;
   color:#000!important;
    font-weight:600;
    font-family: 'Montserrat', sans-serif;
}
`;


