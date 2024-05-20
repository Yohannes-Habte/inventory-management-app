import React from "react";
import Login from "../../../components/user/login/Login";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  return (
    <main>
      <Helmet>
        <title> Log In </title>
      </Helmet>
      <article>
        <Login />
      </article>
    </main>
  );
};

export default LoginPage;
