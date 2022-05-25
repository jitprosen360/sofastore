import React, { useState , useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { withRouter } from './../EmailPassword/withRouter';
import { emailSignInStart , googleSignInStart } from '../../Redux/User/user.actions';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from './../Forms/FormInput';
import Buttons from '../Forms/Buttons'
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

const mapState = ({user}) => ({
    currentUser:user.currentUser    
})

const Signin = (props) => {

    const {currentUser} = useSelector(mapState); 
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password , setPassword ] = useState('');
    
    useEffect(() =>{
        if(currentUser){
            resetForm();
            props.navigate('/' , { replace:true});
         
        }

    },[props,currentUser])

   const resetForm = () => {
       setEmail('');
       setPassword('');
   }
  const  handleSubmit = e => {
       e.preventDefault();
       dispatch(emailSignInStart({email,password}));
      
   } 

const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
}

    const configAuthWrapper = {
        headline:'Login'
    }
       return(
           <AuthWrapper {...configAuthWrapper}>
           <div>
           <form onSubmit={handleSubmit}>
           <div className="login-button">
              <FormInput type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={e => setEmail(e.target.value)} />

            <FormInput type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={e => setPassword(e.target.value)} />

            <Button className="btnc" type="Submit">Login</Button>

            <Buttons className="btnc" onClick={handleGoogleSignIn} />

           </div>

                <div className="links">
                    <Link className='reset' to="/recovery">
                        Reset Password
                    </Link>
                </div>


           </form>
           </div>
           </AuthWrapper>
       )
   }
export default withRouter(Signin);

