import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import "./signIn.scss";
import Button from "../forms/Button/Button";

import { signInWithGoogle, auth } from "../../firebase/utils";
import FormInput from "../forms/form/Form";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetForm = () => {
    setPassword("");
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();

      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
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
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
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
