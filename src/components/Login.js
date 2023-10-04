import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80 text-gray-400">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600 rounded-sm "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-sm "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600  rounded-sm "
        />
        <button className="p-4 my-4 mt-4 bg-red-700 w-full  rounded-md text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-8">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}

          <span
            className="cursor-pointer text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
