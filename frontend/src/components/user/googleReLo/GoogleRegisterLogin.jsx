import React from "react";
import "./GoogleRegisterLogin.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";
import { API } from "../../utils/security/secreteKey";
import axios from "axios";
import * as GoogleAction from "../../../redux/reducers/userReducer.jsx";
import { toast } from "react-toastify";
import { app } from "../../../firebase.js";

const GoogleRegisterLogin = ({ signUp, login }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle google buttons
  const handleGoogle = async () => {
    // dispatch(GoogleAction.userPostStart());
    try {
      // Google Provider
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log("Google Result", result);

      // User data
      const userData = {
        firstName: result.user.displayName
          ? result.user.displayName.split(" ")[0]
          : null,
        lastName: result.user.displayName
          ? result.user.displayName.split(" ")[1]
          : null,
        email: result.user.email,
        image: result.user.photoURL,
        agree: true,
      };
      const { data } = await axios.post(`${API}/auths/google`, userData);

      dispatch(GoogleAction.userPostSuccess(data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="google-buttons-container">
      <FcGoogle className="google-icon" />
      {/* In order to prevent submission, you need to include type button */}
      {login && (
        <button onClick={handleGoogle} type="button" className="google-btn">
          Login with Google
        </button>
      )}
      {signUp && (
        <button onClick={handleGoogle} type="button" className="google-btn">
          Sign Up with Google
        </button>
      )}
    </div>
  );
};

export default GoogleRegisterLogin;
