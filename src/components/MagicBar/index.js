import canvasContext from "@/controller/canvasContext";
import { useContext } from "react";
import {
  LuBold,
  LuCode,
  LuHighlighter,
  LuItalic,
  LuStrikethrough,
  LuUnderline,
} from "react-icons/lu";
import { fonts } from "../../../config";

export default function MagicBar({ canvasRef }) {
  const { text, dispatch } = useContext(canvasContext);

  function handleHighlighter(type) {
    let canvas = canvasRef.current;
    let selectionStartIndex = canvas.selectionStart;
    let selectionEndIndex = canvas.selectionEnd;
    if (selectionStartIndex === selectionEndIndex) {
      return;
    }
    let temp = text;
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
      concat = first + "`" + second + "`";
    } else if (type === "highlight") {
      concat = first + `==${second}==`;
    }
    concat += third;
    dispatch({ type: "onTextChange", payload: concat });
  }

  function handleFontChange(event) {
    dispatch({ type: "onFontChange", payload: fonts[event.target.value] });
  }

  return (
    <div className="flex overflow-x-scroll items-center p-2 border dark:border-white/20 border-black/20 rounded-xl gap-2 w-full">
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
      <select
        onChange={handleFontChange}
        defaultValue={0}
        className="hover:bg-black/20 outline-none hover:dark:bg-white/20 p-2 rounded-lg dark:bg-white/10 bg-black/10"
      >
        <option value={0}>Space Grotesk</option>
        <option value={1}>Host Grotesk</option>
        <option value={2}>Poppins</option>
        <option value={3}>Open Sans</option>
        <option value={4}>Playwrite PE</option>
        <option value={5}>Roboto Serif</option>
      </select>
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
  );
}
