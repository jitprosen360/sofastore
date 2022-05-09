import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Homepage from './Pages/Homepages/Homepage';
import Registration from './Pages/Homepages/Registration';
import HomepageLayout from './Layouts/HomepageLayout';
import { Routes, Route , Navigate  } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import Login from './Pages/Homepages/Login';
import { auth , handleUserProfile } from './firebase/utils';

const initialState = {
  currentUser: null
}

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef
        .onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      })
    });
  }
  componentWillUnmount() {
     
  }


  render() {

    const { currentUser } = this.state;

    return (
      <Title>
        <Routes>
          <Route exact path="/" element={
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          } />
          <Route exact path="/registration" element={ currentUser ? <Navigate to ="/" /> :
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          } />
          <Route exact path="/login" element={ currentUser ? <Navigate replace to="/" /> :
            <MainLayout currentUser={currentUser}>
              <Login />
            </MainLayout>
          } />
        </Routes>
      </Title>
    );
  }
}

export default App;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;