import { useContext, useEffect, useRef } from "react";
import { Digester } from "@gokulvaradan/markdown-parser/dist";
import "./markdown.modules.css";
import canvasContext from "@/controller/canvasContext";

function Preview() {
  const previewRef = useRef();
  const { text, fontStyle } = useContext(canvasContext);

  useEffect(() => {
    if (text) {
      const htmlText = Digester(text);
      previewRef.current.innerHTML = `<div>${htmlText}</div>`;
    }
  }, [text]);

  // function handleExport() {
  //   const html = previewRef.current;
  // }

  return (
    <div className="flex flex-col self-center items-center justify-center md:w-8/12 w-full  p-4 gap-2">
      {/* <div>
        <button
          onClick={handleExport}
          className="px-4 cursor-pointer py-2 bg-green-600 rounded-xl"
        >
          Export
        </button>
      </div> */}
      <div
        ref={previewRef}
        style={{ fontFamily: fontStyle }}
        className="w-full leading-8 rounded-2xl dark:bg-transparent bg-white overflow-hidden break-words overflow-y-scroll text-left font-sans border border-black/10 dark:border-white/20 p-4 md:p-6 h-[88vh] flex items-center justify-center"
      >
        <img
          className="w-40 self-center"
          src="/preview.gif"
          alt="empty state"
        />
      </div>
    </div>
  );
}

export default Preview;
