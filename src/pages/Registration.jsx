import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateSession } from "../helpers/helper";
const { AppName, serverUrl } = require("../config/config.json");

function Registration() {
  let navigate = useNavigate();
  useEffect(() => {
    let statusToken = validateSession();
    if (statusToken) {
      navigate("/home");
    }
  }, []);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(null);
  const registration = async () => {
    let data = {
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      email: email,
    };
    await axios
      .post(`${serverUrl}/auth/registration`, data)
      .then((resultRegistration) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.error ?? [err.response.data.message]);
      });
  };
  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-700 flex h-screen w-full flex-1 flex-col justify-center">
        <div className="bg-gray-200 dark:bg-slate-800 sm:rounded-xl mx-auto w-full max-w-full sm:max-w-xl h-fit align-middle py-3 px-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-fit">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-1 md:mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Sign up to {AppName}
            </h2>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-2xl mt-3">
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
                      {err.path.split("_").join(" ")} {err.msg}
                    </li>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <form action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Username
                </label>
                <div className="mt-1 md:mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="off"
                    onChange={(element) => {
                      setUsername(element.target.value);
                    }}
                    placeholder="Maman"
                    className="px-2 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 dark:bg-slate-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Phone Number
                </label>
                <div className="mt-1 md:mt-2">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    required
                    onChange={(element) => {
                      setPhoneNumber(element.target.value);
                    }}
                    autoComplete="off"
                    placeholder="+(62)891111111111"
                    className="px-2 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 dark:bg-slate-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-1 md:mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={(element) => {
                      setEmail(element.target.value);
                    }}
                    autoComplete="off"
                    placeholder="maman@maman.maman"
                    className="px-2 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 dark:bg-slate-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Password
                </label>
                <div className="mt-1 md:mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={(element) => {
                      setPassword(element.target.value);
                    }}
                    autoComplete="off"
                    placeholder="sangatrahasiabanget"
                    className="px-2 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 dark:bg-slate-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    registration();
                  }}
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 lg:mt-5"
                >
                  Sign up
                </button>
                <a
                  href={"/"}
                  className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mt-2 lg:my-5"
                >
                  Back
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
