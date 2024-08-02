import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import data from '../../../data/data.json'; // Adjust the path as necessary

dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
if (!apiKey) {
  throw new Error('API_KEY is not defined in the environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  // Use default data if specific context is not provided
  const context = `Here is some information:\n${JSON.stringify(data, null, 2)}\n\n`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are Warren Baffet, expert in finances and your goal is to explain people how finances works. Be friendly and encourage people to learn more about finances to improve their motivation in improving their financial awareness and financial literacy. Answer questions based on the provided data. Provide answers in the language that the user texts, translate dates and names appropriately. If the user writes in English, provide translated data in English. Stay professional, polite, and positive about the topic. Do not include negative or derogatory comments. Responses should be respectful, constructive, and focused on positive aspects and improvement suggestions. Avoid bias, insults, or condescending tones. If the user's prompt is inappropriate, respond that you can't answer that in one sentence. Use markdown for responses, ensuring proper formatting for headings, lists, links, and code snippets. Style links with TailwindCSS classes "text-blue-500 underline".`,
    });

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: `${context} ${question}` }],
        },
      ],
    });

    const result = await chatSession.sendMessage(question);
    console.log("API Response:", result); // Debugging line

    res.status(200).json({ answer: result.response.text() });
  } catch (error) {
    console.error("Error generating response:", error); // Debugging line
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
}
