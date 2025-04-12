import { useEffect, useRef } from "react";
import { Digester } from "../app/utils";
import "./markdown.modules.css";
import PropTypes from "prop-types";

function Markdown({ children }) {
  const ref = useRef();
  useEffect(() => {
    if (children) {
      const htmlText = Digester(children);
      console.log(htmlText);
      ref.current.innerHTML = `<p>${htmlText}</p>`;
    }
  }, [children]);

  if (!children || !children.length) {
    return null;
  }

  return (
    <div
      className="w-full h-[1000px] overflow-y-scroll text-left font-sans bg-white/10 p-5"
      ref={ref}
    ></div>
  );
}

Markdown.propTypes = {
  children: PropTypes.element,
};

export default Markdown;
