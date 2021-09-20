import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPasswordStart,
  resetUserState,
} from "../../redux/user/user.actions";

import "./emailPassword.scss";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import FormInput from "../forms/FormInput/FormInPut";
import Button from "../forms/Button/Button";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userError: user.userError,
});

const EmailPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userError } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(userError) && userError.lenght > 0) {
      setErrors(userError);
    }
  }, [userError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
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

export default EmailPassword;
