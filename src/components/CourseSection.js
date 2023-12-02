import React from "react";
import img1 from "../images/brush-strokes-dimen-18-1024x279.png";
import img2 from "../images/bar-new-changess.jpg";
import img3 from "../images/Simple-Visual-Noes-720-04-1.jpg";
import img4 from "../images/fin-leaf-left.png";
import img5 from "../images/fin-leaf-right.png";

export default function CourseSection() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <img src={img1} alt="brush design" className="w-[100%] opacity-70 blur-md" />
        <div className="max-w-[1024px] mx-auto">
          <div className=" flex overlay-container">
            <img src={img4} alt="left leaf" className="ml-16 md:ml-0 lg:ml-0 md:mr-[-40px]" />
            <h1 className=" self-center shrink-0 grow text-slate-800">
              The Edzorb Law Difference
            </h1>
            <img src={img5} alt="right leaf" className="md:ml-[-40px]" />
          </div>
        </div>
      </section>


      <section className="mt-[-60px] lg:mt-[-140px] courses-section max-w-[900px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 my-5 p-10 border border-slate-200 rounded-[50px] drop-shadow-lg">
          <div>
            <img src={img2} alt="bar new changes" className="w-60 mx-auto" />
          </div>
          <div className="">
            <h2>Voluptate dolor elit eu nulla et nostrud incididunt.</h2>
            <ul className=" list-inside text-slate-500 list-disc">
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse  gap-10 my-5 p-10 border border-slate-200 rounded-[50px] drop-shadow-lg">
          <div>
            <img src={img3} alt="Visual notes" className="w-60 mx-auto" />
          </div>
          <div className="self-center">
            <h2>Voluptate dolor elit eu nulla et nostrud incididunt.</h2>
            <ul className="list-inside text-slate-500 list-disc">
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
              <li>
                Nisi id mollit qui in mollit commodo excepteur ea incididunt.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
