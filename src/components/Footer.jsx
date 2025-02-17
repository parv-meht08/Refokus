/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-32 py-10">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-3 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "Linkdin"].map((item, index) => (
              <a
                key={index}
                className="block mt-3 text-zinc-600 capitalize
                "
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-3 text-zinc-500 capitalize">sitemao</h4>
            {["home", "work", "careers", "contacts"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
          <p className="text-right">
            Refokus is pioneering digital agency driven by design and empowered
            by technology.
          </p>
          <img className="w-32 mt-10" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
