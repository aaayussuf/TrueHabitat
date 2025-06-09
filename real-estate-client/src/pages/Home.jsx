import React from "react";
import modernHouse from "../Pictures/modern-house.png";

const Home = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${modernHouse})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            PERFECT HOME <br />
            <span className="text-white">TODAY</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 font-light leading-relaxed">
            We provide tailored real estate solutions, guiding you through every step with personalized experiences that meet your unique needs and aspirations.
          </p>

          {/* Explore Button */}
          <button className="mt-8 px-6 py-3 flex items-center bg-white text-black font-semibold rounded-full shadow hover:bg-gray-100 transition">
            <span>Explore Properties</span>
          </button>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 text-center text-white">
            <div>
              <p className="text-4xl font-bold">200+</p>
              <p className="text-sm font-medium">Projects Complete</p>
            </div>
            <div>
              <p className="text-4xl font-bold">70+</p>
              <p className="text-sm font-medium">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold">$10M+</p>
              <p className="text-sm font-medium">Project Value</p>
            </div>
          </div>

          {/* Agent Reviews */}
          <div className="mt-10 flex items-center bg-white text-black rounded-xl p-4 shadow-md max-w-xl">
            <div className="flex -space-x-4">
              <img src="/agent1.jpg" alt="agent" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="/agent2.jpg" alt="agent" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="/agent3.jpg" alt="agent" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="/agent4.jpg" alt="agent" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">10+ Featured Agents</p>
              <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
