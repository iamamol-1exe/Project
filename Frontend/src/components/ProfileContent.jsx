import React from "react";

const ProfileContent = ({user}) => {
  return (
    <div>
      {" "}
      {/* Main Content */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/20">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                
              </label>
              <div className="w-full h-12 bg-black/20 border border-white/10 rounded-lg px-4 flex items-center text-gray-300">
                {user.name}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <div className="w-full h-12 bg-black/20 border border-white/10 rounded-lg px-4 flex items-center text-gray-300">
               {user.email}
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              placeholder="Tell us a little about yourself..."
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/30"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileContent;
