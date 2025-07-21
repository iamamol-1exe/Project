import React, { useState } from 'react';
import { Sparkles, User, Mail, Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate,  } from 'react-router';

import axios from 'axios'

// Main Register Component
export default function RegisterPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerStatus, setRegisterStatus] = React.useState(null); // null, 'loading', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit  = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
        setRegisterStatus({ status: 'error', message: 'Please fill in all fields.' });
        return;
    }
    setRegisterStatus({ status: 'loading', message: 'Creating your account...' });
    console.log("Registration attempt:", formData);
    
    const response = await axios.post("http://localhost:4000/user/register",{
      name : formData.name,
      email : formData.email,
      password : formData.password
    }).catch((err) =>{
      console.log(err);
    })
    console.log(response);

    if(response.status === 201){
    setTimeout(() => {
      
      setRegisterStatus({ status: 'success', message: 'Account created! Redirecting to login...' });
      navigate('/login')
    }, 2000);
    }
    else {
     setTimeout(()=>{
       setRegisterStatus({status : 'fail', message : 'try different id and pass'});
     },2000)
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
        <Link  to='/home' className="flex items-center text-gray-400 hover:text-white mb-6 group transition-colors duration-300">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter">Create your account</h1>
            <p className="text-gray-400">Join to start summarizing videos instantly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </div>
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
                placeholder="Create a strong password"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </div>
            
            {/* Benefits */}
            <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Unlimited video summaries</div>
                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Save and organize summaries</div>
                <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Export to PDF or text</div>
            </div>

            {registerStatus && (
                <div className={`text-center p-3 rounded-lg text-sm ${
                  registerStatus.status === 'loading' ? 'bg-blue-500/20 text-blue-300' :
                  registerStatus.status === 'success' ? 'bg-green-500/20 text-green-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {registerStatus.message}
                </div>
              )}

            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold h-14 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30">
              Create Free Account
            </button>
          </form>

          <div className="text-center mt-8 text-gray-400">
            <p>Already have an account? <Link to='/login' className="font-semibold text-purple-400 hover:text-purple-300 hover:underline">Sign in</Link></p>
          </div>
        </div>
         <p className="text-center text-xs text-gray-600 mt-6">By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
      </div>

    
    </div>
  );
}
