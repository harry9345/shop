import { UseAdminAuth } from "./../customeHooks";

const WithAdminAuth = (props) => UseAdminAuth(props) && props.children;

export default WithAdminAuth;
