import React, { useState } from "react";
import "./signIn.scss";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/FormInputComp";
import Button from "../button/ButtonComp";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const { setCurrentUser } = useContext(UserContext);
  
  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    console.log("signInWithGoogle called");
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    console.log("handleSubmit called");
    event.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("user not found with this email");
          break;
        default:
          console.log(error);
      }

      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          placeholder=""
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder=""
          name="password"
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
