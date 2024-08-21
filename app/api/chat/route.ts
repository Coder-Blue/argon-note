import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { NextResponse } from "next/server";

export const runtime = "edge";

const apiKey = process.env.GEMINI_API_KEY || "";

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

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const data = JSON.stringify(messages);

    if (!apiKey)
      return new NextResponse("Không tìm thấy API cho Google Gemini", {
        status: 500,
      });
    if (!messages)
      return new NextResponse("Không tìm thấy lệnh", { status: 400 });

    const result = await streamText({
      model: model,
      system:
        "Bạn là một trợ lý AI thân thiện, luôn trả lời câu hỏi theo cách dễ hiểu nhưng bài bản tạo cảm giác như nói chuyện với một giáo viên cấp 3 chuyên nghiệp.",
      prompt: data,
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxTokens: 2048,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log("[CONVERSATION ERROR]", error);
    return new NextResponse("Lỗi nội bộ", { status: 500 });
  }
}
