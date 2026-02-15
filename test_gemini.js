const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDkhz4c31ZzUAvoVoUAqSpUHV0qxY4nAAM");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

async function run() {
    try {
        const prompt = "Hello, are you working?";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("Success:", text);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

run();
