import React, { Component } from "react";
import { withRouter } from "react-router";

import "./emailPassword.scss";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import FormInput from "../forms/form/Form";
import Button from "../forms/Button/Button";

import { auth } from "../../firebase/utils";

const initialState = {
  email: "",
  errors: [],
};
class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/login",
    };
    try {
      const { email } = this.state;
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found, please try again !!"];
          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { email, errors } = this.state;
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
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
