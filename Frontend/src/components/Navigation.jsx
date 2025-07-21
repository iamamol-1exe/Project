"use client"

import { useState } from "react"
import { Link } from "react-router"
import Button from "./Button"
import { Menu, Sparkles, X } from "lucide-react";

const IconWrapper = ({ children, className }) => (
  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${className}`}>
    {children}
  </div>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="/features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
      <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
      <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
    </>
  );


  return (
      
        <header className="fixed top-0 left-0 right-0 bg-gray-900/50 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">QuickVid</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <NavLinks />
              </nav>
              <div className="hidden md:flex items-center space-x-4">
                <Link to='/login' className="text-gray-300 hover:text-white transition-colors duration-300">Sign In</Link>
                <Link to='/register' className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/20">
                  Get Started
                </Link>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/80 backdrop-blur-lg pb-6">
              <nav className="flex flex-col items-center space-y-4 px-4">
                <NavLinks />
                <Link to='/login' className="w-1/4 text-center flex items-center justify-center py-2.5 text-gray-300 hover:text-white transition-colors duration-300">Sign In</Link >
                <Link to='/register' className="w-1/2 bg-purple-600 flex items-center justify-center hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/20">
                  Get Started
                </Link>
              </nav>
            </div>
          )}
        </header>
  )
}

export default Navigation
