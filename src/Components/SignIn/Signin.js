import React, { Component } from 'react';
import Buttons from '../Forms/Buttons'
import { Button } from 'react-bootstrap';
import {SignInWithGoogle, auth} from './../../firebase/utils';
import FormInput from './../Forms/FormInput';


const initialState = {
    email:'',
    password:''
}

class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = async e => {
       e.preventDefault();
       const {email,password} = this.state;

       try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                ...initialState
            });

       }catch(err){
            console.log(err);
       }
   }
   
   render(){

    const { email,password } = this.state;

       return(
           <div>
           <form onSubmit={this.handleSubmit}>
           <div className="login-button">
              <h4>Login</h4>

              <FormInput type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange} />

            <FormInput type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={this.handleChange} />

            <Button className="btnc" type="Submit">Login</Button>

            <Buttons className="btnc" onClick={SignInWithGoogle} />

           </div>
           </form>
           </div>
       )
   }
   }
export default Signin;

