import { useAuth } from "./../customeHooks";

const WithAuth = (props) => useAuth(props) && props.children;

export default WithAuth;
