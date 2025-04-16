"use client";
import { useReducer } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Switch from "@/components/Switch";
import CanvasContext, {
  state as initialState,
  reducer,
} from "@/controller/canvasContext";
import RenderView from "@/components/RenderView";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col w-full h-full relative">
      <CanvasContext.Provider value={{ ...state, dispatch }}>
        <Header />
        <RenderView />
        <Switch />
        <Footer />
      </CanvasContext.Provider>
    </div>
  );
}
