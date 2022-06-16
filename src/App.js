import React, { useEffect } from 'react';

import {useDispatch } from 'react-redux';
import { Routes, Route   } from 'react-router-dom'
import { checkUserSession } from './Redux/User/user.actions';
import WithAuth from './Hoc/WithAuth';
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';
import Registration from './Pages/Homepages/Registration';
import Homepage from './Pages/Homepages/Homepage';
import Login from './Pages/Homepages/Login';
import Recovery from './Pages/Recovery/Recovery';
import Dashboard from './Pages/Dashboard/Dashboard';
import styled from 'styled-components';
import './App.css';
import Admin from './Pages/Admin/Admin';
import WithAdminAuth from './Hoc/withAdminAuth';
import AdminToolbar from './Components/AdminToolbar/Admintoolbar';
import AdminLayout from './Layouts/AdminLayout'
import DashBoardLayout from './Layouts/DashBoardLayout';
import Search from './Pages/Search/Search';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';

const App = props => {
 
  const dispatch = useDispatch();

useEffect(()=>{    

  dispatch(checkUserSession());

},[]);

    return (
      <Title>
        <AdminToolbar />
        <Routes>
          <Route exact path="/" element={
            <HomepageLayout >
              <Homepage />
            </HomepageLayout>
          } />
             <Route  path="/search" element={
            <HomepageLayout >
              <Search />
            </HomepageLayout>
          } />
              <Route  path="/search/:filterType" element={
            <HomepageLayout >
              <Search />
            </HomepageLayout>
          } />
            <Route  path="/product/:productID" element={
            <HomepageLayout >
              <ProductDetails />
            </HomepageLayout>
          } />
                <Route  path="/cart" element={
            <HomepageLayout >
              <Cart />
            </HomepageLayout>
          } />

          <Route exact path="/registration" element={ 
            <MainLayout>
              <Registration />
            </MainLayout>
          } />
          <Route exact path="/login" element={ 
            <MainLayout >
              <Login />
            </MainLayout>
          } />

            <Route exact path="/recovery" element={ 
            <MainLayout >
              <Recovery />
            </MainLayout>
          } />

            <Route exact path="/dashboard" element={ 
              <WithAuth>
            <DashBoardLayout >
              <Dashboard />
            </DashBoardLayout>
            </WithAuth>
               } />

             <Route exact path="/admin" element={ 
              <WithAdminAuth >
                 <AdminLayout>
                <Admin />
                </AdminLayout>
              </WithAdminAuth>
            } />

        </Routes>
      </Title>
    );
  }


export default App;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;