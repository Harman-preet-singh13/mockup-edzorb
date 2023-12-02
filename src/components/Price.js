import React from "react";
import img1 from "../images/brush-strokes-dimen-18-1024x279.png";
import img4 from "../images/fin-leaf-left.png";
import img5 from "../images/fin-leaf-right.png";
import img6 from "../images/icons2-call.png";
import img7 from "../images/icons2-whatsaapp-e1687690015465.png";
import img8 from "../images/Asset-11.png";
import img9 from "../images/Asset-14.png";
import img10 from "../images/Asset-15.png";

import img11 from "../images/icons8-checkmark-64 (1).png";
import img12 from "../images/icons8-checkmark-64-1.png";
import img13 from "../images/icons8-checkmark-64.png";

export default function Price() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <img src={img1} alt="brush design" className="w-[100%] opacity-70 blur-md" />
        <div className="max-w-[1024px] mx-auto">
          <div className=" flex overlay-container">
            <img
              src={img4}
              alt="left leaf"
              className="ml-16 md:ml-8 lg:ml-0 md:mr-[-40px]"
            />
            <h1 className=" self-center shrink-0 grow text-slate-800">
              Get Started Today
            </h1>
            <img src={img5} alt="right leaf" className="md:ml-[-40px]" />
          </div>
        </div>
      </section>

      <section className="mt-[-60px] lg:mt-[-150px] max-w-[1024px] mx-auto">
        <div className="my-10 flex justify-between flex-col gap-5 md:gap-0 md:flex-row">
          <div className="card-hover cursor-pointer w-[300px] mx-auto border drop-shadow-lg shadow-lg rounded-3xl">
            <div className="px-2 flex flex-col">
              <img
                src={img8}
                alt="price one logo"
                className="my-5 w-36 mx-auto border"
              />
              <h2 className=" text-center">Premium+</h2>
              <p className="mx-auto text-center rounded-lg w-20 px-2 py-1 text-white bg-black">
                lorem
              </p>
              <p className="text-[#5772ff] text-center font-semibold">
                Compact
              </p>
              <ul className="mx-auto my-5 px-3">
                <li className="flex">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex mt-2">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex mt-2">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex my-2">
                  <img
                    src={img11}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  <span className="text-black underline">no dolor</span>
                </li>
              </ul>
              <button className="mx-auto px-2 py-1 w-20 rounded-lg text-white bg-blue-900 hover:bg-blue-950">
                Buy Now
              </button>
              <div className="my-5 flex justify-center gap-5">
                <img src={img7} alt="Whatsapp" className="w-12 border rounded-lg" />
                <img src={img6} alt="call" className="w-12 border rounded-lg" />
              </div>
            </div>
          </div>

          <div className="card-hover cursor-pointer w-[300px] mx-auto border drop-shadow-lg shadow-lg rounded-3xl">
            <div className="px-2 flex flex-col">
              <img
                src={img9}
                alt="price one logo"
                className="my-5 w-36 mx-auto border"
              />
              <h2 className=" text-center">Premium+</h2>
              <p className="mx-auto text-center rounded-lg w-20 px-2 py-1 text-white bg-black">
                lorem
              </p>
              <p className="text-[#5772ff] text-center font-semibold">
                Compact
              </p>
              <ul className="mx-auto my-5 px-3">
                <li className="flex">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex mt-2">
                  <img
                    src={img12}
                    alt="red cross tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex mt-2">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex my-2">
                  <img
                    src={img11}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  <span className="text-black underline">no dolor</span>
                </li>
              </ul>
              <button className="mx-auto px-2 py-1 w-20 rounded-lg text-white bg-blue-900 hover:bg-blue-950">
                Buy Now
              </button>
              <div className="my-5 flex justify-center gap-5">
                <img src={img7} alt="Whatsapp" className="w-12 border rounded-lg" />
                <img src={img6} alt="call" className="w-12 border rounded-lg" />
              </div>
            </div>
          </div>

          <div className="card-hover cursor-pointer w-[300px] mx-auto border drop-shadow-lg shadow-lg rounded-3xl">
            <div className="px-2 flex flex-col">
              <img
                src={img10}
                alt="price one logo"
                className="my-5 w-36 mx-auto border"
              />
              <h2 className=" text-center">Premium+</h2>
              <p className="mx-auto text-center rounded-lg w-20 px-2 py-1 text-white bg-black">
                lorem
              </p>
              <p className="text-[#5772ff] text-center font-semibold">
                Compact
              </p>
              <ul className="mx-auto my-5 px-3">
                <li className="flex">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex mt-2">
                  <img
                    src={img13}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex mt-2">
                  <img
                    src={img12}
                    alt="red cross tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  Do magna ut aliqua enim proident dolor
                </li>
                <li className="flex my-2">
                  <img
                    src={img11}
                    alt="green tick"
                    className="w-5 h-5 mt-1 mr-3"
                  />
                  <span className="text-black underline">no dolor</span>
                </li>
              </ul>
              <button className="mx-auto px-2 py-1 w-20 rounded-lg text-white bg-blue-900 hover:bg-blue-950">
                Buy Now
              </button>
              <div className="my-5 flex justify-center gap-5">
                <img src={img7} alt="Whatsapp" className="w-12 border rounded-lg" />
                <img src={img6} alt="call" className="w-12 border rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
