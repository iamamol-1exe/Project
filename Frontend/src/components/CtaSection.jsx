import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const CtaSection = () => {
  return (
    <div>  <section className="text-center bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-3xl py-16 px-8 my-16 border border-white/10 shadow-2xl shadow-purple-600/20">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are saving time and learning faster. Create your free account today.
            </p>
            <Link to='/register' className=" w-1/5 bg-white text-purple-700 font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 shadow-2xl shadow-white/20 flex items-center justify-center mx-auto">
              <span>Sign Up for Free</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </section></div>
  )
}

export default CtaSection