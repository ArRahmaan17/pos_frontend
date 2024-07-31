import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { loginSuccess, validateSession } = require("../helpers/helper.js");
const { AppName, serverUrl } = require("../config/config.json");

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    let statusToken = validateSession();
    if (statusToken) {
      navigate("/home");
    }
  }, []);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(null);
  const register = () => {
    let data = { username: username, password: password };
    axios
      .post(`${serverUrl}/auth/login`, data)
      .then((result) => {
        loginSuccess(result.data.data);
        navigate("/home");
      })
      .catch((err) => {
        setError(
          err.response.data.error ?? [{ path: err.response.data.message }]
        );
      });
  };
  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-700 flex h-screen w-full flex-1 flex-col justify-center">
        <div className="bg-gray-200 dark:bg-slate-800 sm:rounded-xl mx-auto w-full max-w-full sm:max-w-xl h-fit align-middle py-3 px-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-1 md:mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Sign in to {AppName}
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
            {error ? (
              <div className="w-full bg-red-100 dark:bg-red-700 rounded-md p-1 mb-2">
                <div className="text-sm sm:text-md font-semibold text-rose-600 dark:text-gray-300">
                  There were {error.length} errors with your registration
                </div>
                {error.map((err, index) => {
                  return (
                    <li
                      className="px-5 text-sm sm:text-md text-rose-600 dark:text-gray-300 capitalize"
                      key={index}
                    >
                      {err.path.split("_").join(" ") ?? err.message} {err.msg}
                    </li>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Email address / Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    onChange={(element) => {
                      setUsername(element.target.value);
                    }}
                    placeholder="maman@maman.maman"
                    className="px-2 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:ring-gray-0 placeholder:text-gray-400 dark:placeholder:text-gray-400 dark:bg-slate-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="/forgot-password"
                      className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    onChange={(element) => {
                      setPassword(element.target.value);
                    }}
                    placeholder="sangatrahasiabanget"
                    className="px-2 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 dark:bg-slate-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => {
                    register();
                  }}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
              Not a member?{" "}
              <a
                href="/registration"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-300"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
