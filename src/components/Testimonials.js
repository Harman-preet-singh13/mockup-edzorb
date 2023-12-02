import React from "react";
import img4 from "../images/fin-leaf-left.png";
import img5 from "../images/fin-leaf-right.png";
import img1 from "../images/brush-strokes-dimen-18-1024x279.png";
import img6 from "../images/avatar-neww-150x150.png";
import img7 from "../images/icons2-avatars-38-150x150.png";
import img8 from "../images/icons2-avatars-43-150x150.png";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <img src={img1} alt="brush design" className="w-[100%] opacity-70 blur-md" />
        <div className="max-w-[1024px] mx-auto">
          <div className=" flex overlay-container">
            <img
              src={img4}
              alt="left leaf"
              className="ml-36 md:ml-36 lg:ml-0 md:mr-[-100px]"
            />
            <h1 className=" self-center shrink-0 grow text-slate-800">
              Testimonials
            </h1>
            <img src={img5} alt="right leaf" className="md:ml-[-100px]" />
          </div>
        </div>
      </section>

      <section className="mt-[-60px] lg:mt-[-150px] max-w-[1024px] mx-auto">
        <div className="my-10 flex justify-between flex-col gap-5 text-center md:gap-0 md:flex-row">
          <div className=" hover:translate-y-[-10px] cursor-pointer w-[250px] mx-auto border drop-shadow-lg shadow-lg rounded-3xl">
            <div className="flex flex-col">
              <img src={img6} alt="avtar" className="my-5 w-36 mx-auto border rounded-full" />
              <div className="mx-auto mb-5 flex ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            <div className="mx-auto">
                 <p className="w-32 text-slate-500">
                Et nostrud velit est elit quis proident enim nisi reprehenderit
                nisi.
              </p>
              <p className="my-5 text-lg text-slate-700">
                Lorem velit
              </p>
            </div>
             
            </div>
          </div>

          <div className="hover:translate-y-[-10px] cursor-pointer w-[250px] mx-auto border drop-shadow-lg shadow-lg rounded-3xl">
            <div className="flex flex-col">
              <img src={img7} alt="avtar" className="my-5 w-36 mx-auto border rounded-full" />
              <div className="mx-auto mb-5 flex ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            <div className="mx-auto">
                 <p className="w-32 text-slate-500">
                Et nostrud velit est elit quis proident enim nisi reprehenderit
                nisi.
              </p>
              <p className="my-5 text-lg text-slate-700">
                Lorem velit
              </p>
            </div>
             
            </div>
          </div>

          <div className="hover:translate-y-[-10px] cursor-pointer w-[250px] mx-auto border drop-shadow-lg shadow-lg rounded-3xl">
            <div className="flex flex-col">
              <img src={img8} alt="avtar" className="my-5 w-36 mx-auto border rounded-full" />
              <div className="mx-auto mb-5 flex ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            <div className="mx-auto">
                 <p className="w-32 text-slate-500">
                Et nostrud velit est elit quis proident enim nisi reprehenderit
                nisi.
              </p>
              <p className="my-5 text-lg text-slate-700">
                Lorem velit
              </p>
            </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
