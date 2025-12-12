import React from "react";

export default function BlogHero() {
  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="px-10 mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-[60px] font-bold text-gray-900 mb-4">
              Insights & Industry
              <br />
              Updates
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Stay Informed With The Latest News, Trends, And Guidance In Fuel
              Trading, Logistics, And Petroleum Quality Management.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center">
            {/* BIG Background Circle on the RIGHT */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#e9edf5] right-0 top-4 z-0"></div>

            {/* Main Image on LEFT overlapping the circle */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-lg z-10 -mr-10">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
                alt="Industrial facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
