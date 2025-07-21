const functionService = require("../services/function.service");
const  fs = require("fs");
const path = require("path");
const {GoogleGenAI} = require("@google/genai")



module.exports.fetchMp3 = async (req,res) =>{
    const transcript = await functionService.generateText();
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Summarize the following lecture transcript into clear bullet-point notes and provide 3-5 key takeaways and return the result in json format: ${transcript}`,
    });
    const responseText = response.text;
    const cleanedText = responseText.replace(/^```json\n|```$/g, '');
    const data = JSON.parse(cleanedText);
    res.status(200).json({
        response:data,
        transcript,
        message : "mp3 fetched successfully",
    })
    
    fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'mp3', 'sample.mp3'));


}








