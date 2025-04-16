import { useContext } from "react";
import Canvas from "../Canvas";
import canvasContext from "@/controller/canvasContext";
import Preview from "../Preview";

export default function RenderView() {
  const { activeView } = useContext(canvasContext);
  return activeView == 0 ? <Canvas /> : <Preview />;
}
