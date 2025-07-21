import { Accessibility, BookOpen, Clock, TrendingUp } from "lucide-react";
import React from "react";
const IconWrapper = ({ children, className }) => (
  <div
    className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${className}`}
  >
    {children}
  </div>
);
const MissionSection = () => {
  return (
    <div>
      {" "}
      <section className="my-24">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-400 mb-6">
                To revolutionize how students consume educational content by
                making video learning more accessible, efficient, and effective.
                We understand time is precious, and our AI helps you focus on
                what truly matters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <IconWrapper   className="bg-purple-500/20 text-purple-300 mr-4">
                    <Clock size={20} />
                  </IconWrapper>{" "}
                  <span>Save countless hours of study time</span>
                </div>
                <div className="flex items-center">
                  <IconWrapper className="bg-blue-500/20 text-blue-300 mr-4">
                    <TrendingUp size={20} />
                  </IconWrapper>{" "}
                  <span>Improve comprehension and retention</span>
                </div>
                <div className="flex items-center">
                  <IconWrapper className="bg-pink-500/20 text-pink-300 mr-4">
                    <Accessibility size={20} />
                  </IconWrapper>{" "}
                  <span>Make learning accessible for everyone</span>
                </div>
              </div>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
              <BookOpen className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                10,000+
              </div>
              <p className="text-gray-400 mt-2">
                Videos summarized for students worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionSection;
