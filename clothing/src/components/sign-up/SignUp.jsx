import React, { useState } from "react";
import "./signUp.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/FormInputComp";
import Button from "../button/ButtonComp";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      // console.log("createAuthUserWithEmailAndPassword response ", response);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can not create user email already exist in use");
      } else {
        console.log("createAuthUserWithEmailAndPassword error : ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          placeholder=""
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          placeholder=""
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder=""
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder=""
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
