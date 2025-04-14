"use client";
import { useEffect, useRef, useState } from "react";
import Markdown from "@/components";
import {
  LuBold,
  LuCode,
  LuHighlighter,
  LuItalic,
  LuStrikethrough,
  LuUnderline,
} from "react-icons/lu";

export default function Home() {
  const [input, setInput] = useState("");
  // const [textSize, setTextSize] = useState(50);
  const canvasButtonRef = useRef();
  const [tab, setTab] = useState("canvas");
  const highlightRef = useRef();
  const previewButtonRef = useRef();
  const containerRef = useRef();
  function handleInput(event) {
    setInput(event.target.value);
    getCursorPosition();
  }

  // function onEnd(event) {
  //   event.preventDefault();
  //   if (event.clientX) setTextSize((event.clientX / window.innerWidth) * 100);
  // }

  useEffect(() => {
    handleNavigation("canvas");
  }, []);

  function handleNavigation(tab) {
    let container = containerRef.current.getBoundingClientRect();
    if (tab === "canvas") {
      let geometry = canvasButtonRef.current.getBoundingClientRect();
      highlightRef.current.style.width = `${geometry.width}px`;
      highlightRef.current.style.transform = `translateX(${
        geometry.left - container.left
      }px)`;
      setTab("canvas");
    } else {
      let geometry = previewButtonRef.current.getBoundingClientRect();
      highlightRef.current.style.width = `${geometry.width}px`;
      highlightRef.current.style.transform = `translateX(${
        geometry.left - container.left
      }px)`;
      setTab("preview");
    }
  }

  function handleHighlighter(type) {
    const canvas = document.getElementById("canvas");
    let selectionStartIndex = canvas.selectionStart;
    let selectionEndIndex = canvas.selectionEnd;
    if (selectionStartIndex === selectionEndIndex) {
      return;
    }
    let temp = input;
    let first = temp.slice(0, selectionStartIndex);
    let second = temp.slice(selectionStartIndex, selectionEndIndex);
    let third = temp.slice(selectionEndIndex);
    let concat = "";
    if (type === "bold") {
      concat = first + `**${second}**`;
    } else if (type === "underline") {
      concat = first + `_${second}_`;
    } else if (type === "italic") {
      concat = first + `*${second}*`;
    } else if (type === "strike") {
      concat = first + `~~${second}~~`;
    } else if (type === "code") {
      concat = first + `<code>${second}</code>`;
    } else if (type === "highlight") {
      concat = first + `==${second}==`;
    }
    concat += third;
    setInput(concat);
  }

  function getCursorPosition() {}

  return (
    <div className="flex flex-col w-full h-full relative">
      <img className="w-48 mt-4 self-center" src="/mc.svg" />

      {tab === "canvas" ? (
        <div className="flex animate-openup flex-col h-full self-center items-center justify-center gap-2 p-4 md:w-8/12 w-full ">
          <div className="flex items-center p-2 border dark:border-white/20 border-black/20 rounded-xl gap-2 w-full">
            <button
              className="px-5 py-3 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 rounded-lg dark:bg-white/10 bg-black/10"
              onClick={() => handleHighlighter("bold")}
            >
              <LuBold />
            </button>
            <button
              className="px-5 py-3 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 rounded-lg dark:bg-white/10 bg-black/10"
              onClick={() => handleHighlighter("underline")}
            >
              <LuUnderline />
            </button>
            <button
              className="px-5 py-3 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 rounded-lg dark:bg-white/10 bg-black/10"
              onClick={() => handleHighlighter("italic")}
            >
              <LuItalic />
            </button>
            <button
              className="px-5 py-3 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 rounded-lg dark:bg-white/10 bg-black/10"
              onClick={() => handleHighlighter("strike")}
            >
              <LuStrikethrough />
            </button>
            <button
              className="px-5 py-3 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 rounded-lg dark:bg-white/10 bg-black/10"
              onClick={() => handleHighlighter("code")}
            >
              <LuCode />
            </button>
            <button
              className="px-5 py-3 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 rounded-lg dark:bg-white/10 bg-black/10"
              onClick={() => handleHighlighter("highlight")}
            >
              <LuHighlighter />
            </button>
          </div>
          <div
            className="bg-transparent border border-black/20 dark:border-white/20 focus-within:border-black/40 focus-within:dark:border-white/40 transition-all w-full h-full rounded-2xl overflow-hidden"
            // style={{ width: `${textSize}%` }}
          >
            <textarea
              value={input}
              id="canvas"
              placeholder="your markdown canvas"
              onChange={handleInput}
              className="w-full h-[100vh] resize-none field outline-none p-4 font-sans"
            ></textarea>
          </div>
          {/* <div
          draggable
          className="h-[90vh] rounded-2xl border-white/20 focus:bg-white/40 hover:bg-white/40 w-2 bg-white/20 cursor-ew-resize"
          onDrag={onEnd}
        />
        <Markdown width={100 - textSize}>{input}</Markdown> */}
        </div>
      ) : (
        <div className="flex self-center h-full items-center justify-center md:w-8/12 w-full  p-4 ">
          <Markdown>{input}</Markdown>
        </div>
      )}
      <div className="fixed shadow-2xl flex self-center bg-white dark:bg-black border border-white/20 p-2 rounded-full bottom-10">
        <div className="relative" ref={containerRef}>
          <button
            onClick={() => handleNavigation("canvas")}
            ref={canvasButtonRef}
            className="px-6 cursor-pointer py-3 rounded-full"
          >
            Canvas
          </button>
          <button
            onClick={() => handleNavigation("preview")}
            ref={previewButtonRef}
            className="px-6 cursor-pointer py-3 rounded-full"
          >
            Preview
          </button>
          <div
            ref={highlightRef}
            className="bg-gradient-to-t transition-transform -z-10 from-green-400 absolute left-0 top-0 to-green-900 rounded-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
