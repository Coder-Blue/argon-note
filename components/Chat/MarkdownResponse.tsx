"use client";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "@/components/Chat/styles/Module.css";
import "katex/dist/katex.min.css";

interface MarkdownResponseProps {
  content: string;
}

interface CodeProps {
  children?: any;
  className?: any;
  node?: any;
}

export default function MarkdownResponse({ content }: MarkdownResponseProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code(props: CodeProps) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={coldarkDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
      className="overflow-hidden text-sm leading-7"
    >
      {content || ""}
    </Markdown>
  );
}
