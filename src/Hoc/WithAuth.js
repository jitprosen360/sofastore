import { useAuth } from './../customHooks/CustomHook'
// import { withRouter } from '../Components/EmailPassword/withRouter';

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;