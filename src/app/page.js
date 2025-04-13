"use client";
import { useState } from "react";
import Markdown from "@/components";

export default function Home() {
  const [input, setInput] = useState("");
  const [textSize, setTextSize] = useState(100);
  function handleInput(event) {
    setInput(event.target.value);
  }

  function onEnd(event) {
    if (event.clientX) setTextSize((event.clientX / window.innerWidth) * 100);
  }

  return (
    <div className="flex flex-col w-full h-full">
      <img className="w-48 py-4 self-center invert" src="/next.svg" />
      <div className="flex md:flex-row flex-col h-full items-start gap-2 p-2 ">
        <div
          className="bg-white/10 w-full h-full"
          style={{ width: `${textSize}%` }}
        >
          <textarea
            value={input}
            placeholder="your markdown canvas"
            onChange={handleInput}
            className="w-full h-[100vh] field outline-none p-4 font-sans"
          ></textarea>
        </div>
        <div
          draggable
          className="h-[100vh] focus:bg-white/40 hover:bg-white/40 w-2 bg-white/20 cursor-ew-resize"
          onDrag={onEnd}
        />
        <Markdown width={100 - textSize}>{input}</Markdown>
      </div>
    </div>
  );
}
