import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUser,
  signInWithGoogle,
  resetAllAuthForms,
} from "../../redux/user/user.actions";

import "./signIn.scss";
import Button from "../forms/Button/Button";

import FormInput from "../forms/FormInput/FormInPut";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SignIn = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push("/");
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setPassword("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(email, password));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  const configAuthWrapper = {
    headline: "Login",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <div className="socialSignIn">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery"> Reset Your Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};
export default withRouter(SignIn);
