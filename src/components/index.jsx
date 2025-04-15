"use client";
import { useEffect, useRef } from "react";
import { Digester } from "@gokulvaradan/markdown-parser/dist";
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
      className="w-full leading-8 rounded-2xl dark:bg-transparent bg-white overflow-hidden break-words overflow-y-scroll text-left font-sans border border-black/10 dark:border-white/20 p-4 md:p-6 h-[88vh]"
      ref={ref}
    ></div>
  );
}

Markdown.propTypes = {
  children: PropTypes.element,
};

export default Markdown;
