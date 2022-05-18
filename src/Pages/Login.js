import React from "react";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2 className="text-2xl text-center my-8">Login</h2>

      <button
        onClick={() => signInWithGoogle()}
        className=" btn btn-outline btn-primary flex mx-auto"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
