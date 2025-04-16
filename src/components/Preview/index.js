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
      previewRef.current.innerHTML = `<p>${htmlText}</p>`;
    }
  }, [text]);

  return (
    <div className="flex self-center items-center justify-center md:w-8/12 w-full  p-4 ">
      <div
        ref={previewRef}
        style={{ fontFamily: fontStyle }}
        className="w-full leading-8 rounded-2xl dark:bg-transparent bg-white overflow-hidden break-words overflow-y-scroll text-left font-sans border border-black/10 dark:border-white/20 p-4 md:p-6 h-[88vh]"
      >
        <img className="w-40" src="/preview.gif" alt="empty state" />
      </div>
    </div>
  );
}

export default Preview;
