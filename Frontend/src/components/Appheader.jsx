import { Menu, Sparkles, X } from "lucide-react";
import React,{useState} from "react";
import { Link } from "react-router";



const AppHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavLinks = () => (
        <>
          <Link to="/home" className="text-gray-300 hover:text-white transition-colors duration-300">Dashboard</Link >
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link>
        </>
    );

    return (
        <header className="fixed top-0 left-0 right-0 bg-gray-900/50 backdrop-blur-lg border-b border-white/10 z-50">
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
                 {/* Profile Avatar */}
                 <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                 <Link to='/profile'>
                    S
                  </Link>
                 </div>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/80 backdrop-blur-lg pb-6">
              <nav className="flex flex-col items-center space-y-4 px-4">
                <NavLinks />
                 <div className="h-10 w-10 mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    S
                 </div>
              </nav>
            </div>
          )}
        </header>
    );
};

export default AppHeader;