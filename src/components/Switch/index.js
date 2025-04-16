import canvasContext from "@/controller/canvasContext";
import { useContext, useEffect, useRef } from "react";

export default function Switch() {
  const { activeView, dispatch } = useContext(canvasContext);
  const canvasButtonRef = useRef();
  const highlightRef = useRef();
  const previewButtonRef = useRef();
  const containerRef = useRef();

  function handleTabSwitch(tabIndex) {
    dispatch({ type: "switch", payload: tabIndex });
  }

  useEffect(() => {
    let container = containerRef.current.getBoundingClientRect();
    if (activeView === 0) {
      let geometry = canvasButtonRef.current.getBoundingClientRect();
      highlightRef.current.style.width = `${geometry.width}px`;
      highlightRef.current.style.transform = `translateX(${
        geometry.left - container.left
      }px)`;
    } else if (activeView === 1) {
      let geometry = previewButtonRef.current.getBoundingClientRect();
      highlightRef.current.style.width = `${geometry.width}px`;
      highlightRef.current.style.transform = `translateX(${
        geometry.left - container.left
      }px)`;
    }
  }, [activeView, dispatch]);

  return (
    <div className="fixed shadow-2xl flex self-center bg-white dark:bg-black border border-white/20 p-2 rounded-full bottom-10">
      <div className="relative" ref={containerRef}>
        <div
          ref={highlightRef}
          className="bg-gradient-to-t transition-transform absolute left-0 mix-blend-difference top-0 bg-white rounded-full h-full"
        />
        <button
          onClick={() => handleTabSwitch(0)}
          ref={canvasButtonRef}
          className="px-6 cursor-pointer py-3 rounded-full"
        >
          Canvas
        </button>
        <button
          onClick={() => handleTabSwitch(1)}
          ref={previewButtonRef}
          className="px-6 cursor-pointer py-3 rounded-full"
        >
          Preview
        </button>
      </div>
    </div>
  );
}
