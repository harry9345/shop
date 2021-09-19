import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPassword,
  resetAllAuthForms,
} from "../../redux/user/user.actions";

import "./emailPassword.scss";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import FormInput from "../forms/FormInput/FormInPut";
import Button from "../forms/Button/Button";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordError: user.resetPasswordError,
});

const EmailPassword = (props) => {
  const dispatch = useDispatch();
  const { resetPasswordError, resetPasswordSuccess } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetAllAuthForms());
      props.history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.lenght > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
  };

  const configAuthWrapper = {
    headline: "Email Password",
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      )}
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
