"use client";
import { useEffect, useRef, useState } from "react";
// import { Digester } from "./utils";
import Markdown from "@/components";

export default function Home() {
  // const ref = useRef();
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   if (input && input.length) {
  //     ref.current.innerHTML = Digester(input);
  //   }
  // }, [input]);

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="flex flex-col w-full h-full">
      {/* <img className="w-48 py-4 self-center invert" src="/next.svg" /> */}
      <div className="flex flex-row h-full items-start gap-2 p-2 ">
        <div className="bg-white/10 w-full h-full">
          <textarea
            value={input}
            placeholder="your markdown canvas"
            onChange={handleInput}
            className="w-full h-[100vh] resize-none field outline-none p-4"
            // rows={10}
            // cols={10}
          ></textarea>
        </div>
        <div
          draggable
          className="h-[100vh] w-2 bg-white/20"
          onDragStart={(e) => console.log(e)}
          onDragEnd={(e) => console.log(e)}
        />
        <Markdown>{input}</Markdown>
      </div>
    </div>
  );
}
