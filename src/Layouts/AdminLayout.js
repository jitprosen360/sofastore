import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../Redux/User/user.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './../Components/Header/Header';
import VerticalNav from './../Components/VerticalNav/VerticalNav';
import Footer from './../Components/Footer/Footer';
import {Container, Col, Row } from "react-bootstrap";
const AdminLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <Container className="adminLayout">
      <Header {...props} />
      <Row className="controlPanel">
        <Col lg={3} className='sidebar'>
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </Col>
        <Col lg={9} className="content">
          {props.children}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default AdminLayout;