import { generateText } from "ai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createGoogleGenerativeAI, google } from '@ai-sdk/google';


export async function POST(req, res) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;

  
const genAI = createGoogleGenerativeAI({
    // custom settings
    apiKey: "GEMINI_API_KEY"
  });
//   const  = new GoogleGenerativeAI();
  const model = genAI("gemini-pro");
  const streamingResponse = await model.generateContentStream(prompt);

  const { text } = await generateText({
    model: google('gemini-1.5-pro-latest'),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

  // console.log(text)

  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}
