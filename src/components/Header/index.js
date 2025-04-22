import canvasContext from "@/controller/canvasContext";
import { useContext, useEffect } from "react";

export default function Header() {
  const { expandView, dispatch } = useContext(canvasContext);
  useEffect(() => {
    dispatch({ type: "onTextChange", payload: localStorage.getItem("text") });
  }, [dispatch]);
  if (expandView) {
    return null;
  }
  return <img className="w-36 mt-4 self-center" src="/mc.svg" />;
}
