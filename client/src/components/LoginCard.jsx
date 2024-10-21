import axios from "axios";
import { useState } from "react";
import { useAppStateStore, useUserStore } from "../global/states";
import { useNavigate } from "react-router-dom";
import { serverURI } from "../config/config";
import { toast } from 'react-toastify';


export const LoginCard = () => {

  const nav = useNavigate();
  const setLogin = useAppStateStore((state) => state.setLogin)
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);



  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };
  const validateForm = () => {
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 1) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    return validationErrors;
  };


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      toast.error(JSON.stringify(validationErrors))
      return;
    }

    try {
      const response = await axios.post(`${serverURI}/api/auth/login`, { email, password }, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
      setLoading(false);
      if (response.data.status) {
        toast.success(response.data.message, {
          style: { color: "black" },
          position: "bottom-right"
        })
        setUser(response.data.user.userName, response.data.user.email, response.data.user._id, response.data.user.createdAt, response.data.user.bio, response.data.user.name, response.data.user.isAdmin);
        setLogin(true);
        nav('/');
      } else throw new Error(response.data.message);
    } catch (err) {
      setLoading(false);
      toast.error(err.message, {
        style: { color: "black" },
        position: "bottom-right"
      })
    }
  };



  return (
    <div className="md:w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Welcome
        </h2>
        <p className="text-sm text-center text-gray-600">
          Log in to continue your journey with Blog App.
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <hr className="w-full border-gray-300" />
        <span className="px-4 text-sm text-gray-500">OR</span>
        <hr className="w-full border-gray-300" />
      </div>
      <div>
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"

        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Icon"
            className="w-7 h-7"
          />
          Continue with Google
        </button>
      </div>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <a href="/auth?state=create-account" className="font-medium text-blue-500 hover:text-blue-600">
          Create account
        </a>
      </p>
    </div>
  )
}
