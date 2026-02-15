const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '.env.local' });

async function testGemini() {
    console.log('=== Testing Gemini API ===');

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    console.log('API Key present:', !!apiKey);
    console.log('API Key length:', apiKey?.length);
    console.log('API Key (first 10 chars):', apiKey?.substring(0, 10));

    if (!apiKey) {
        console.error('ERROR: No API key found!');
        return;
    }

    try {
        console.log('\nInitializing GoogleGenerativeAI...');
        const genAI = new GoogleGenerativeAI(apiKey);

        console.log('Getting model: gemini-2.5-flash...');
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        console.log('Sending test prompt...');
        const result = await model.generateContent("Say hello in one word");
        const response = await result.response;
        const text = response.text();

        console.log('\n✅ SUCCESS!');
        console.log('Response:', text);
    } catch (error) {
        console.error('\n❌ ERROR:');
        console.error('Type:', typeof error);
        console.error('Name:', error.name);
        console.error('Message:', error.message);
        console.error('Full error:', error);
    }
}

testGemini();
