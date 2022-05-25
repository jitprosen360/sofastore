import React, { useState , useEffect  } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { withRouter } from './../EmailPassword/withRouter';
import { signUpUserStart  } from '../../Redux/User/user.actions';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import FormInput from '../Forms/FormInput';
import { Button } from 'react-bootstrap';

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const Signup = (props) => {
    const {currentUser , userErr } = useSelector(mapState);
    const dispatch = useDispatch();
  
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(currentUser) {
            reset();
            props.navigate('/', { replace:true});
         }
       
    },[props, currentUser])

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0 ) {
            setErrors(userErr)
        }
    },[userErr])

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }
  

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }

        const configAuthWrapper = {
            headline:'Registration'
        }

        return (
            <AuthWrapper { ...configAuthWrapper}>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}
                <form onSubmit={handleFormSubmit} className='formR'>

                    <FormInput type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={ e => setDisplayName(e.target.value)}
                    />
                    <FormInput type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={ e => setEmail(e.target.value)}
                    />
                    <FormInput type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={ e => setPassword(e.target.value)}
                    />
                    <FormInput type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={ e => setConfirmPassword(e.target.value)}
                    />

                    <Button className="btnc" type="Submit">Register</Button>
                </form>
            </AuthWrapper>
        )
    }

export default withRouter(Signup);


