<<<<<<< HEAD
import { convertToCoreMessages, streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
=======
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
import { NextResponse } from "next/server";

export const runtime = "edge";

const apiKey = process.env.GEMINI_API_KEY || "";

<<<<<<< HEAD
const google = createGoogleGenerativeAI({
  apiKey,
});

const model = google("gemini-1.5-pro", {
  safetySettings: [
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
  ],
});
=======
const genAI = new GoogleGenerativeAI(apiKey);

const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(
      (message) => message.role === "user" || message.role === "assistant",
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [{ text: message.content }],
    })),
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 0,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!apiKey)
      return new NextResponse("Không tìm thấy API cho Google Gemini", {
        status: 500,
      });
    if (!messages)
      return new NextResponse("Không tìm thấy lệnh", { status: 400 });

<<<<<<< HEAD
    const result = await streamText({
      model: model,
      system:
        "Bạn là một trợ lý AI thân thiện, luôn trả lời câu hỏi theo cách dễ hiểu nhưng bài bản tạo cảm giác như nói chuyện với một giáo viên cấp 3 chuyên nghiệp.",
      messages: convertToCoreMessages(messages),
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxTokens: 2048,
    });

    return result.toDataStreamResponse();
=======
    const geminiStream = await genAI
      .getGenerativeModel({
        model: "gemini-1.0-pro",
        generationConfig,
        safetySettings,
      })
      .generateContentStream(buildGoogleGenAIPrompt(messages));

    const stream = GoogleGenerativeAIStream(geminiStream);

    return new StreamingTextResponse(stream);
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
  } catch (error) {
    console.log("[CONVERSATION ERROR]", error);
    return new NextResponse("Lỗi nội bộ", { status: 500 });
  }
}
