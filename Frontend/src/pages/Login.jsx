import React, { useContext } from "react";
import { Sparkles, Mail, Lock, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { DataContext } from "../context/DataContextProvider";

// Main Login Component
export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = React.useState(null); // null, 'loading', 'error'
  const {setIsLoggedIn} = useContext(DataContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setLoginStatus({
        status: "loading",
        message: "Please fill in all fields.",
      });
      return;
    }
    setLoginStatus({ status: "loading", message: "Signing in..." });
    console.log("Login attempt:", formData);

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem('token',response.data.token) // giving undefined

        setTimeout(() => {
          setLoginStatus({
            status: "Success",
            message: "Navigating to the Home",
          });
          setIsLoggedIn(true);
          navigate("/home");
        }, 2000);
      } else {
        setLoginStatus({
          status: "error",
          message: "Invalid credentials. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased flex items-center justify-center p-4">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full opacity-10 filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <Link
          to="/home"
          className="flex items-center text-gray-400 hover:text-white mb-6 group transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter">
              Welcome Back
            </h1>
            <p className="text-gray-400">Sign in to continue to QuickVid.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-purple-400 hover:text-purple-300 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {loginStatus && (
              <div
                className={`text-center p-3 rounded-lg text-sm ${
                  loginStatus.status === "loading"
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {loginStatus.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold h-14 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-8 text-gray-400">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-purple-400 hover:text-purple-300 hover:underline"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
