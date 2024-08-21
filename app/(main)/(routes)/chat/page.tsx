import type { Metadata } from "next";
import ChatComponent from "./ChatComponent";

export const metadata: Metadata = {
  title: "AI Chatbot",
};

function ChatPage() {
  return <ChatComponent />;
}

export default ChatPage;
