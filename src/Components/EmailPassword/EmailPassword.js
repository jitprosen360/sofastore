import React, { useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { withRouter } from "../EmailPassword/withRouter";
import { resetPasswordStart , resetUserState } from '../../Redux/User/user.actions';
import AuthWrapper from './../AuthWrapper/AuthWrapper'
import FormInput from '../Forms/FormInput';
import { Button } from 'react-bootstrap';

const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
})


const EmailPassword = (props) => {

    const { resetPasswordSuccess , userErr } = useSelector(mapState);
    const dispatch = useDispatch();

        const [email, setEmail] = useState('');
        const [errors, setErrors] = useState([]);

useEffect(() => {
    if(resetPasswordSuccess) {
      dispatch(resetUserState()) ; 
    props.navigate('/login' );
    }

},[ resetPasswordSuccess])

useEffect(() => {
if(Array.isArray(userErr) && userErr.length > 0 ){
    setErrors(userErr);
}

},[userErr])

const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({email}));

    }

    const configAuthWrapper = {
        headline: 'Email Password'
    };

    return (
        <AuthWrapper {...configAuthWrapper}  >
            {
                errors.length > 0 && (
                    <ul>
                        {errors.map((e, index) => {
                            return (
                                <li key={index}>{e}</li>
                            )
                        })}
                    </ul>
                )
            }
            <form className='formR' onSubmit={handleSubmit}>
                <FormInput type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    handleChange={ e => setEmail(e.target.value)} />

                <Button className='btnc' type="submit">
                    Email Password
                </Button>
            </form>
        </AuthWrapper>
    )
}


export default withRouter(EmailPassword);