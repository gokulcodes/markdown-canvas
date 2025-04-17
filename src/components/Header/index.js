import canvasContext from "@/controller/canvasContext";
import { useContext, useEffect } from "react";

export default function Header() {
  const { dispatch } = useContext(canvasContext);
  useEffect(() => {
    dispatch({ type: "onTextChange", payload: localStorage.getItem("text") });
  }, [dispatch]);
  return <img className="w-36 mt-4 self-center" src="/mc.svg" />;
}
