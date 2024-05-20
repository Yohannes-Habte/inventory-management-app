import React from "react";
import Register from "../../../components/user/register/Register";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <main>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <article>
        <Register />
      </article>
    </main>
  );
};

export default RegisterPage;
