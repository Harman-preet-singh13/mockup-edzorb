import React from "react";
import img2 from "../images/Asset-27-1.png";
import img3 from "../images/Asset-28.png";
import img4 from "../images/icons2-call.png";

export default function Contact() {
  return (
    <div className="bg-[#01324e] text-white">
      <div className="max-w-[1024px] mx-auto">
        <h1 className=" text-center my-5">Why Edzorb Law?</h1>
        <div className="flex flex-col md:flex-row">
          <div className="font-semibold">
            <p className="mt-5">Dolor aliquip irure minim amet officia.</p>
            <p className="mt-5">
              Amet reprehenderit adipisicing sunt in reprehenderit id ea
              cupidatat ipsum ex et Lorem id ipsum.
            </p>
            <ul className="list-inside list-disc">
              <li className="mt-5">
                Veniam nulla et eu aute sint quis fugiat aliqua qui veniam
                culpa.
              </li>
              <li className="mt-2">
                Aliquip ex duis fugiat tempor ad excepteur est ut laborum ut
                velit qui.
              </li>
            </ul>
            <div className="mt-10 flex justify-center gap-10">
              <div>
                <img src={img2} alt="arrow rank" className="w-16" />
                <h1>1000+</h1>
                <h2>Ranks</h2>
              </div>
              <div>
                <img src={img3} alt="arrow rank" className="w-16" />
                <h1>1000+</h1>
                <h2>Ranks</h2>
              </div>
            </div>
          </div>

          <div className="contact-form shrink-0 grow">
            <form className="mb-10 mt-20 text-black cursor-pointer w-[300px] mx-auto  drop-shadow-lg shadow-lg rounded-3xl">
              <h2 className="flex justify-center">
                Get A Call Back
                <img src={img4} alt="call icon" className="w-8" />
              </h2>
              <div className="flex flex-col">
                <input
                  className="mx-auto my-4 rounded-full px-2 py-1 w-52 bg-[#e7e7e7] border border-slate-400"
                  placeholder="Your Name"
                />
                <input
                  className="mx-auto my-4 rounded-full px-2 py-1 w-52 bg-[#e7e7e7] border border-slate-400"
                  placeholder="Mobile No."
                />
                <input
                  className="mx-auto my-4 rounded-full px-2 py-1 w-52 bg-[#e7e7e7] border border-slate-400"
                  placeholder="Your Email"
                />
                <input
                  className="mx-auto my-4 rounded-full px-2 py-1 w-52 bg-[#e7e7e7] border border-slate-400"
                  placeholder="Your Message"
                />
                <button type="submit" className="mx-auto px-2 py-1 w-20 rounded-lg text-white bg-blue-900 hover:bg-blue-950">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
