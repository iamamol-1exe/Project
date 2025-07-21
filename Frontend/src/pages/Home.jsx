import React, { useContext, useState } from "react";
import { Youtube, Sparkles, Play, Clipboard, Check } from "lucide-react";
import { DataContext } from "../context/DataContextProvider";
import FeaturesGrid from "../components/FeaturesGrid";
import CtaSection from "../components/CtaSection";
import AppHeader from "../components/Appheader";
import Navigation from "../components/Navigation";
import { Footer } from "../components/Footer";
import axios from "axios";

// Main App Component
export default function App() {
  const { isLoggedIn } = useContext(DataContext);

  const [videoUrl, setVideoUrl] = useState("");

  // Corrected the typo from setSummaryTes to setSummaryText
  const [summaryText, setSummaryText] = useState(null);
  const [summaryStatus, setSummaryStatus] = useState({
    status: "success",
    message: "Summary generated successfully!",
  });
  const [isCopied, setIsCopied] = useState(false);

  const handleSummarize = async (e) => {
    e.preventDefault();
    if (!videoUrl.trim()) {
      setSummaryStatus({
        status: "error",
        message: "Please enter a valid YouTube URL.",
      });
      setSummaryText(""); // Clear summary on error
      return;
    }
    setSummaryStatus({
      status: "loading",
      message: "Summarizing your video... please wait.",
    });
    setSummaryText(""); // Clear previous summary while loading
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const response = await axios.post(
          "http://localhost:4000/api/function/mp3",
          {
            url: videoUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data.response;
          console.log(data);
          setSummaryText(data);
          setSummaryStatus({
            status: "success",
            message: "Summarization complete!",
          });
        } else {
          setSummaryStatus({
            status: "failed",
            message: "Try again",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    if (!summaryText?.lecture_summary) return;

    const { bullet_points, key_takeaways } = summaryText.lecture_summary;
    let textToCopy = "";

    if (bullet_points?.length > 0) {
      textToCopy += "Summary:\n";
      textToCopy += bullet_points.map((point) => `- ${point}`).join("\n");
    }

    if (key_takeaways?.length > 0) {
      textToCopy += "\n\nKey Takeaways:\n";
      textToCopy += key_takeaways.map((takeaway) => `- ${takeaway}`).join("\n");
    }

    if (!textToCopy) return; // Don't copy if there's nothing to copy

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full opacity-10 filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {isLoggedIn ? <AppHeader /> : <Navigation />}4
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Hero Section */}
          <section className="text-center my-16">
            <div className="inline-flex items-center justify-center bg-white/10 text-purple-300 px-4 py-2 rounded-full mb-6 border border-white/10">
              <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
              <span>AI-Powered Video Summarization</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Less Watching,
              </span>
              <br />
              More Learning.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
              Paste any YouTube link and our AI will distill hours of video
              content into a concise, easy-to-read summary. Perfect for
              students, researchers, and professionals.
            </p>

            {/* Main Input Card */}
            <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/20">
              <form
                onSubmit={handleSummarize}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="relative w-full">
                  <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Paste your YouTube link here..."
                    className="w-full h-14 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={summaryStatus?.status === "loading"}
                  className="w-full sm:w-auto flex-shrink-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold h-14 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {summaryStatus?.status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                  <span>
                    {summaryStatus?.status === "loading"
                      ? "Analyzing..."
                      : "Summarize"}
                  </span>
                </button>
              </form>
              {summaryStatus && summaryStatus.status !== "success" && (
                <div
                  className={`mt-4 text-center p-3 rounded-lg text-sm ${
                    summaryStatus.status === "loading"
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {summaryStatus.message}
                </div>
              )}
            </div>
          </section>

          {/* --- Summary Display Section --- */}
          {summaryStatus?.status === "success" &&
            summaryText?.lecture_summary && (
              <section className="max-w-4xl mx-auto my-12 animate-fade-in">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/20">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                      Generated Summary
                    </h2>
                    <button
                      onClick={handleCopy}
                      className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-gray-300 font-semibold py-2 px-4 border border-white/20 rounded-lg transition-all duration-300"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="h-5 w-5" />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="prose prose-invert prose-lg max-w-none text-gray-300 text-left leading-relaxed">
                    {/* Render the bullet points as a list */}
                    {summaryText.lecture_summary.bullet_points?.length > 0 && (
                      <>
                        <h3 className="text-xl font-bold mt-4 mb-3 text-purple-300">
                          Summary
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {summaryText.lecture_summary.bullet_points.map(
                            (point, index) => (
                              <li key={`bullet-${index}`}>{point}</li>
                            )
                          )}
                        </ul>
                      </>
                    )}

                    {/* Render the key takeaways */}
                    {summaryText.lecture_summary.key_takeaways?.length > 0 && (
                      <>
                        <h3 className="text-xl font-bold mt-6 mb-3 text-purple-300">
                          Key Takeaways
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {summaryText.lecture_summary.key_takeaways.map(
                            (takeaway, index) => (
                              <li key={`takeaway-${index}`}>{takeaway}</li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </section>
            )}

          <FeaturesGrid />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
