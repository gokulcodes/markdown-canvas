import { createContext } from "react";
import { fonts } from "../../config";

const state = {
  activeView: 0,
  text: "",
  expandView: false,
  fontStyle: fonts[0],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "switch":
      return { ...state, activeView: action.payload };
    case "onTextChange":
      localStorage.setItem("text", action.payload);
      return { ...state, text: action.payload };
    case "onFontChange":
      return { ...state, fontStyle: action.payload };
    case "expand":
      return { ...state, expandView: !state.expandView };
  }
};

export { state, reducer };

const canvasContext = createContext();
export default canvasContext;
