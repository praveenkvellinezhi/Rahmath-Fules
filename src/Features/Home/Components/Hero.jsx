import React from "react";

import img1 from "../../../assets/Images/img1.png";     // storage tank
import img2 from "../../../assets/Images/img2.jpg";     // storage tank
    // fuel truck
import img3 from "../../../assets/Images/img3.png";     // storage tank
     // lab testing

export default function Hero() {
  return (
    <section className="bg-[#f3f8fd] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ✅ LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight max-w-xl">
            Fueling The Future With Trusted Energy Solutions
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
              Get A Quote
            </button>

            <button className="border border-orange-400 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="space-y-6">
          <p className="text-gray-600 max-w-md">
            A Trusted Name In Fuel Trading And Transportation With Decades Of
            Expertise.
          </p>

          {/* ✅ IMAGE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img
              src={img1}
              className="rounded-xl shadow-lg object-cover h-[230px] w-full"
              alt="Fuel Storage"
            />
            <img
              src={img2}
              className="rounded-xl shadow-lg object-cover h-[230px] w-full"
              alt="Fuel Truck"
            />
            <img
              src={img3}
              className="rounded-xl shadow-lg object-cover h-[230px] w-full"
              alt="Fuel Testing"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
