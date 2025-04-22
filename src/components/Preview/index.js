import { useContext, useEffect, useRef } from "react";
import markdown from "@gokulvaradan/markdown-parser/dist";
import "./markdown.modules.css";
import canvasContext from "@/controller/canvasContext";
import { LuExpand } from "react-icons/lu";

function Preview() {
  const previewRef = useRef();
  const { text, dispatch, expandView, fontStyle } = useContext(canvasContext);

  useEffect(() => {
    if (text) {
      const htmlText = markdown.parse(text);
      previewRef.current.innerHTML = `<div class="py-20" >${htmlText}</div>`;
    }
  }, [text]);

  // function handleExport() {
  //   const html = previewRef.current;
  // }

  function handleExpand() {
    dispatch({ type: "expand" });
  }

  return (
    <div
      className={`flex relative flex-col self-center items-start justify-center ${
        expandView ? "w-full" : "md:w-8/12 w-full"
      }   p-4 gap-2`}
    >
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
        className={`w-full  flex items-start leading-8 rounded-2xl dark:bg-transparent bg-white overflow-hidden break-words overflow-y-scroll text-left font-sans p-4 md:p-6 ${
          expandView
            ? "h-[100vh]"
            : "h-[88vh] border border-black/10 dark:border-white/20"
        }  justify-center`}
      >
        <img
          className="w-40 self-center"
          src="/preview.gif"
          alt="empty state"
        />
      </div>
      <button
        onClick={handleExpand}
        className="p-4 bg-white/10 absolute right-10 bottom-10 rounded-xl hover:bg-white/20 cursor-pointer"
      >
        <LuExpand />
      </button>
    </div>
  );
}

export default Preview;
