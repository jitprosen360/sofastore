import {useAdminAuth } from './../customHooks/CustomHook'

const WithAdminAuth = props => useAdminAuth(props) &&  props.children;

export default WithAdminAuth;