const { GoogleGenAI } = require("@google/genai");
const path = require('path');
const {createUserContent} =  require("@google/genai");
const {createPartFromUri} = require("@google/genai");

module.exports.generateText = async () => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  let myfile; // Declare variable in outer scope so it's accessible later
  try {
    myfile = await ai.files.upload({
      file: path.join(__dirname, '..', '..', 'public', 'mp3', 'sample.mp3'), // Correct relative path
      config: {
        mimeType: 'audio/mp3',
      },
    });
  } catch (error) {
    console.log(error.message);
    return error.message;
  }

  try {
    if (!myfile) {
      return "File not found";
    }
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createUserContent([
        createPartFromUri(myfile.uri, myfile.mimeType),
        "Generate a transcript of the speech.",
      ]),
    });
    const transcript = response.text;
    return transcript;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
