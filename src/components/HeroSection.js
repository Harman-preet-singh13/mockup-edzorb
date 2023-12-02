import React from 'react'
import img1 from "../images/Asset-8-1.png"

export default function HeroSection() {
  return (
    <section className="bg-[#002f49]">
        <div className="max-w-[1024px] mx-auto hero-section-container">
            <div>
                <img 
                src={img1}
                alt="hero-section"
                className=""
                />
            </div>
            <div className="text-white self-center">
                <h1>
                  lorem ipsum dolor  
                </h1>
                <h1>sit amet, consectetur</h1>
                <h2>
                  lorem ipsum dolor
                </h2>
                <h2>lorem ipsum dolor</h2>
                
            </div>
        </div>
    </section>
  )
}
