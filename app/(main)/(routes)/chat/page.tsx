"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import Heading from "@/components/Chat/Heading";
import { HomeIcon, Send, Sparkles, StopCircleIcon, Trash } from "lucide-react";
import { useProStore } from "@/stores/pro-store";
import { Button } from "@/components/ui/button";
import UserMessage from "@/components/Chat/UserMessage";
import AIResponse from "@/components/Chat/AIResponse";
import MarkdownResponse from "@/components/Chat/MarkdownResponse";
import { Textarea } from "@/components/ui/textarea";

function ChatPage() {
  const { user } = useUser();
  const { handleOpenOrCloseProModal } = useProStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
    setMessages,
  } = useChat({ api: "/api/chat" });
  const router = useRouter();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (error) {
      const errorParsed = JSON.parse(error?.message);
      if (errorParsed?.status === 403) {
        handleOpenOrCloseProModal();
      }
    }
  }, [error, handleOpenOrCloseProModal]);

  function handleClearChat() {
    setMessages([]);
  }

  return (
    <div className="no-scrollbar overflow-y-scroll">
      <Heading
        title="Trò chuyện AI"
        description="Tìm hiểu những kiến thức thế giới cùng Google Gemini."
        icon={Sparkles}
        iconColor="text-muted-foreground"
        bgColor="bg-muted-foreground/10"
      />
      <div className="ml-2">
        <div className="relative flex h-full flex-col justify-between">
          <div
            ref={containerRef}
            className="no-scrollbar h-[calc(100vh-180px)] space-y-10 overflow-y-auto scroll-smooth"
          >
            {messages.length > 0 ? (
              <>
                {messages.map((m) => (
                  <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === "user" ? (
                      <UserMessage>
                        <MarkdownResponse content={m.content} />
                      </UserMessage>
                    ) : (
                      <AIResponse>
                        <MarkdownResponse content={m.content} />
                      </AIResponse>
                    )}
                  </div>
                ))}
                <div className="absolute bottom-20 left-0 w-full pr-3 text-right">
                  <Button size="sm" onClick={handleClearChat} variant="outline">
                    <Trash className="h-5 w-5" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center space-y-4">
                <Image
                  src="/empty.png"
                  height="300"
                  width="300"
                  alt="Empty"
                  className="dark:hidden"
                />
                <Image
                  src="/empty-dark.png"
                  height="300"
                  width="300"
                  alt="Empty"
                  className="hidden dark:block"
                />
                <h2 className="text-lg font-medium">
                  Chào mừng đến với Argon của {user?.firstName}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Hãy đặt câu hỏi cho Google Gemini
                </p>
                <Button onClick={() => router.push("/documents")}>
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Về trang chủ
                </Button>
              </div>
            )}
          </div>
          <div className="mb-[13.5px]">
            <form
              onSubmit={isLoading ? stop : handleSubmit}
              className="relative flex w-full items-center"
            >
              <Textarea
                placeholder="Bạn có câu hỏi nào vào ngày hôm nay...?"
                value={input}
                className="mr-2 min-h-1 resize-none"
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                disabled={!input}
                className="absolute right-2 mr-2"
              >
                {isLoading ? (
                  <StopCircleIcon className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
