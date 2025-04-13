import { useEffect, useRef } from "react";
import { Digester } from "../app/utils";
import "./markdown.modules.css";
import PropTypes from "prop-types";

function Markdown({ children, width }) {
  const ref = useRef();
  useEffect(() => {
    if (children) {
      const htmlText = Digester(children);
      ref.current.innerHTML = `<p>${htmlText}</p>`;
    }
  }, [children]);

  if (!children || !children.length) {
    return null;
  }

  return (
    <div
      className="w-full rounded-2xl overflow-hidden break-words overflow-y-scroll text-left font-sans border border-white/20 p-10"
      ref={ref}
    ></div>
  );
}

Markdown.propTypes = {
  children: PropTypes.element,
};

export default Markdown;
