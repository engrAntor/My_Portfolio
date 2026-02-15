const { GoogleGenerativeAI } = require('@google/generative-ai');

// Hardcode key for test since we cannot easily load .env here without dotenv package
const GEMINI_API_KEY = "AIzaSyDkhz4c31ZzUAvoVoUAqSpUHV0qxY4nAAM";

async function listModels() {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // There isn't a direct listModels method on the client instance in some versions, 
        // but the error message suggested calling ListModels.
        // Let's try a simple generation to see if it works with a different model name if possible,
        // or use the API via fetch to list models.

        // Direct fetch for listing models
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
        const data = await response.json();
        console.log('Available Models:');
        if (data.models) {
            data.models.forEach(m => console.log(m.name));
        } else {
            console.log(JSON.stringify(data, null, 2));
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

listModels();
