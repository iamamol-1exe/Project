import { BookOpen, Clock, Sparkles } from 'lucide-react'
import React from 'react'
const IconWrapper = ({ children, className }) => (
  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${className}`}>
    {children}
  </div>
);
const FeaturesGrid = () => {
  return (
    <div>  <section className="my-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/10">
                <IconWrapper className="bg-purple-500/20 text-purple-300">
                  <Clock size={28} />
                </IconWrapper>
                <h3 className="text-2xl font-bold mt-6 mb-3">Save Time</h3>
                <p className="text-gray-400">Get the key insights from long videos in a fraction of the time, freeing you up for more important tasks.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/10">
                <IconWrapper className="bg-blue-500/20 text-blue-300">
                  <BookOpen size={28} />
                </IconWrapper>
                <h3 className="text-2xl font-bold mt-6 mb-3">Study Smarter</h3>
                <p className="text-gray-400">Quickly review lectures, tutorials, and documentaries. Absorb information faster and retain more.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/10">
                <IconWrapper className="bg-pink-500/20 text-pink-300">
                  <Sparkles size={28} />
                </IconWrapper>
                <h3 className="text-2xl font-bold mt-6 mb-3">AI-Powered</h3>
                <p className="text-gray-400">Our advanced AI understands context, identifies key topics, and generates human-like summaries.</p>
              </div>
            </div>
          </section></div>
  )
}

export default FeaturesGrid