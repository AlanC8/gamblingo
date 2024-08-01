import 'dotenv/config';
import express from 'express';
import globalRouter from './global-router';
import { logger } from './logger';
import OpenAI from 'openai';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use('/api/v1/', globalRouter);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are professional teacher who suggests his students different LLM courses. 
You should provide a 4 books to read in order to become well-trained LLM engineer.
A book should contain a brief description of the course, book name and author name. 
Please, return your response in following array JSON format: 
{
  books: [
    {
      "author": "Author Name",
      "name": "Book Name",
      "description": "Description of the course"
    }
  ]
}
If user prompt is irrelevant return empty array of books
`;
const userPrompt =
  'I am a software engineer who has a keen interest in LLM course. What should I start with?';

const main = async () => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
      response_format: {
        type: 'json_object',
      },
    });

    const resJson: string | null = response.choices[0].message.content;
    if (resJson) {
      try {
        const parsedRes = JSON.parse(resJson);
        console.log(parsedRes.books);
      } catch (e: any) {
        console.log('JSON parsing failed:', e.message);
      }
    }
  } catch (e: any) {
    console.log(e.message);
  }
};

// main();

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
