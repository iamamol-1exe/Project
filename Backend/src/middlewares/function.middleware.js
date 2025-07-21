const fs = require("fs");
const ytdlp = require("yt-dlp-exec");
const ffmpeg = require("fluent-ffmpeg");
const ffmegpath = require("ffmpeg-static");
const path = require("path");




module.exports.fecthMp3 = async (req, res, next) => {
  ffmpeg.setFfmpegPath(ffmegpath);

  const { url } = req.body;

  // Validate request body
  if (!url) {
    return res.status(400).json({
      message: "url is required",
    });
  }
  // Create mp3 dir if needed (inside public folder so it can be served)
  const outputDir = path.join(__dirname, "..", "..", "public", "mp3");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // Use a timestamp to avoid name collisions
  const outputTemplate = `sample.%(ext)s`;

  try {
    await ytdlp(url, {
      extractAudio: true,
      audioFormat: "mp3",
      ffmpegLocation: ffmegpath, 
      output: path.join(outputDir, outputTemplate),
     
      progress: false,
    });

    const savedFile = outputTemplate.replace("%(ext)s", "mp3");
    req.mp3 = path.join("mp3", savedFile); 
    console.log("✅ MP3 downloaded:", req.mp3);
    return next();
  } catch (err) {
    console.error("❌ yt-dlp download failed:", err);
    return res.status(500).json({ message: "error in fetching mp3", error: err.message });
  }



};
