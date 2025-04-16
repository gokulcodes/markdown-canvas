import canvasContext from "@/controller/canvasContext";
import MagicBar from "../MagicBar";

const { useEffect, useRef, useContext } = require("react");

export default function Canvas() {
  const previousScrollTop = useRef(0);
  const { text, fontStyle, dispatch } = useContext(canvasContext);
  const topGradientRef = useRef();
  const bottomGradientRef = useRef();
  const canvasRef = useRef();

  function handleGradientVisibility(event) {
    if (event.target.clientHeight >= event.target.scrollHeight) {
      bottomGradientRef.current.style.display = "none";
      topGradientRef.current.style.display = "none";
      return;
    }
    let currentScrollTop = event.target.scrollTop;
    if (currentScrollTop > previousScrollTop.current) {
      bottomGradientRef.current.style.display = "none";
      topGradientRef.current.style.display = "block";
    } else if (currentScrollTop < previousScrollTop.current) {
      bottomGradientRef.current.style.display = "block";
      topGradientRef.current.style.display = "none";
    }

    previousScrollTop.current = currentScrollTop;
  }

  useEffect(() => {
    let canvas = canvasRef.current;
    if (canvas.clientHeight > canvas.scrollHeight) {
      topGradientRef.current.style.display = "block";
      bottomGradientRef.current.style.display = "none";
      return;
    }
    canvas.addEventListener("scroll", handleGradientVisibility);
    return () => canvas.removeEventListener("scroll", handleGradientVisibility);
  }, []);

  function handleInput(event) {
    dispatch({ type: "onTextChange", payload: event.target.value });
  }

  return (
    <div className="flex animate-openup flex-col h-full self-center items-center justify-center gap-4 p-4 md:w-8/12 w-full ">
      <MagicBar canvasRef={canvasRef} />
      <div className="bg-transparent relative border overflow-contain border-black/20 dark:border-white/20 focus-within:border-green-300/40 focus-within:dark:border-green-300/40 transition-all w-full h-full rounded-2xl overflow-hidden">
        <div
          ref={topGradientRef}
          className="h-36 hidden pointer-events-none w-full bg-gradient-to-b from-[#0a0a0a] to-transparent absolute top-0 animate-opacity"
        />
        <textarea
          value={text}
          ref={canvasRef}
          style={{ fontFamily: fontStyle }}
          placeholder="your markdown canvas"
          onChange={handleInput}
          className="w-full h-[80vh] overflow-contain resize-none field outline-none p-4 font-sans"
        ></textarea>
        <div
          ref={bottomGradientRef}
          className="h-36 hidden pointer-events-none w-full bg-gradient-to-t from-[#0a0a0a] to-transparent absolute bottom-0 animate-opacity"
        />
      </div>
    </div>
  );
}
