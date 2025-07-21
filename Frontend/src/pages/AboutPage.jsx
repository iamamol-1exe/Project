import {
  Sparkles,
  BrainCircuit,
  Zap,
  Users,
  Shield,
  Target,
  TrendingUp,
  Accessibility,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Clock,
} from "lucide-react";
import Navigation from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import AppHeader from "../components/Appheader";
import CtaSection from "../components/CtaSection";
import FeaturesGrid from "../components/FeaturesGrid";
import MissionSection from "../components/MissionSection";

// Helper component for Icons
const IconWrapper = ({ children, className }) => (
  <div
    className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${className}`}
  >
    {children}
  </div>
);

// Main About Page Component
export default function AboutPage() {
  const { isLoggedIn } = useContext(DataContext);
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full opacity-10 filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {isLoggedIn ? <AppHeader /> : <Navigation />}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section */}
        <section className="text-center my-16">
          <div className="inline-flex items-center justify-center bg-white/10 text-purple-300 px-4 py-2 rounded-full mb-6 border border-white/10">
            <BrainCircuit className="h-5 w-5 mr-2 text-purple-400" />
            <span>About QuickVid</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Empowering Students
            </span>
            <br />
            with Smarter Learning.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
            We believe every student deserves access to efficient learning
            tools. QuickVid transforms lengthy educational videos into concise,
            actionable summaries using cutting-edge AI.
          </p>
        </section>

        {/* Mission Section */}
        <MissionSection/>

        {/* Features Grid */}
        <FeaturesGrid/>

        {/* Team Section */}
        <section className="my-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built by Students, for Students
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-8">
            Our team consists of students and recent graduates who experienced
            firsthand the challenges of consuming hours of educational video
            content. We built QuickVid to solve our own problem – and now we're
            sharing it with students everywhere.
          </p>
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-xl italic text-gray-300">
              "We spent countless hours watching lecture recordings. QuickVid
              gives us back that time to focus on understanding and applying
              what we learn."
            </p>
            <p className="mt-4 font-semibold text-purple-400">
              - The QuickVid Team
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection></CtaSection>
      </main>

      <Footer></Footer>
    </div>
  );
}
