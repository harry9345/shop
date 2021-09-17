import React, { useState } from "react";
import { withRouter } from "react-router";

import "./emailPassword.scss";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import FormInput from "../forms/form/Form";
import Button from "../forms/Button/Button";

import { auth } from "../../firebase/utils";

const EmailPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/login",
    };
    try {
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found, please try again !!"];
          setErrors(err);
        });
    } catch (error) {
      console.log(error);
    }
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
      <div className="forrmWrap">
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
