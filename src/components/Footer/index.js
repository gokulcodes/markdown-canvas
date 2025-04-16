import { LuGithub, LuTwitter } from "react-icons/lu";
export default function Footer() {
  return (
    <footer className=" md:w-8/12 w-full flex flex-col md:flex-row gap-10 px-20 justify-between items-center mb-40 mt-5 self-center">
      <p>Made by gokul_varadan</p>
      <div className="flex gap-10">
        <a
          href="https://github.com/gokulcodes/markdown-canvas"
          target="_blank"
          className="flex gap-2 items-center justify-center"
        >
          <LuGithub />
          GitHub
        </a>
        <a
          href="https://x.com/gokul_varadan"
          className="flex gap-2 items-center justify-center"
          target="_blank"
        >
          <LuTwitter />
          x.com
        </a>
      </div>
    </footer>
  );
}
