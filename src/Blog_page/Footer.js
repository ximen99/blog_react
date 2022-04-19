import React from "react";

function Footer() {
  return (
    <div className="w-full py-10 flex flex-col align-middle text-black bg-zinc-200">
      <p className="m-auto">
        Crafted with ❤️ and ☕️ by{" "}
        <span className="text-[#6B8490] font-bold italic"> Cheng Ximen</span>
      </p>
      <p className="m-auto">
        Made with{" "}
        <a href="https://reactjs.org/">
          <img
            src={`${process.env.PUBLIC_URL}/image/react.svg`}
            className="h-6 w-6 inline"
            alt="react"
          />
        </a>
        <a href="https://tailwindcss.com/">
          <img
            src={`${process.env.PUBLIC_URL}/image/tailwind.svg`}
            className="h-6 w-6 inline"
            alt="tailwind"
          />
        </a>
        deployed at
        <a href="https://github.com/">
          <img
            src={`${process.env.PUBLIC_URL}/image/github.svg`}
            className="h-6 w-6 inline"
            alt="github"
          />
        </a>
      </p>
    </div>
  );
}

export default Footer;
