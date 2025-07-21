import React, { useContext, useEffect, useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  User,
  Settings,
  FileText,
  Bell,
  LogOut,
  Edit3,
  Trash2,
  Download,
} from "lucide-react";
import AppHeader from "../components/Appheader";
import ProfileContent from "../components/ProfileContent";
import { DataContext } from "../context/DataContextProvider";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useNavigate } from "react-router";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(DataContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (isLoggedIn && token) {
      try {
        const response = await axios.get("http://localhost:4000/user/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 -left-80 w-96 h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -right-80 w-96 h-96 bg-blue-600 rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {isLoggedIn ? <AppHeader /> : <Navigation />}
        <div className="md:flex md:space-x-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0 mb-8 md:mb-0">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/20">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={`https://placehold.co/100x100/1e293b/9333ea?text=S`}
                    alt="User Avatar"
                    className="h-24 w-24 rounded-full mx-auto border-2 border-purple-500"
                  />
                  <button className="absolute bottom-0 right-0 h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition">
                    <Edit3 size={16} />
                  </button>
                </div>
                <h2 className="text-xl font-bold mt-4">{user.name}</h2>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
              <nav className="space-y-2">
                <a
                  href="#"
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "profile"
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <User size={20} />
                  <span>Profile Settings</span>
                </a>
                <a
                  onClick={() => {
                    handleLogout();
                  }}
                  href="#"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
                >
                  <LogOut size={20} />
                  <span>Log Out</span>
                </a>
              </nav>
            </div>
          </aside>

          <div className="flex-1">
            {activeTab === "profile" && <ProfileContent user={user} />}
          </div>
        </div>
      </main>
    </div>
  );
}
