import React from 'react'

import Eco from "../../../assets/Images/Eco.jpg"
import Delivery from "../../../assets/Images/Delivery .jpg"
import FuelTest from "../../../assets/Images/FuelTest.jpg"
import Lab from "../../../assets/Images/Laboratary.jpg"

import { ArrowRight } from 'lucide-react'

export default function BlogArticles() {
  const articles = [
    {
      id: 1,
      image: Delivery,
      category: "Logistics",
      date: "Feb 2025",
      title: "How Bulk Fuel Delivery Works In The UAE",
    },
    {
      id: 2,
      image: FuelTest,
      category: "Quality",
      date: "Jan 2025",
      title: "Why Fuel Quality Testing Matters",
    },
    {
      id: 3,
      image: Eco,
      category: "Sustainability",
      date: "Feb 2025",
      title: "The Future Of Eco-Friendly Transport",
    },
    {
      id: 4,
      image: Lab,
      category: "Quality",
      date: "Dec 2024",
      title: "Ensuring Quality Fuel for Industry",
    }
  ];

  return (
    <div className="lg:px-15 mx-auto px-4 sm:px-6  py-16 bg-white">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
       Explore Our Articles
      </h2>

      {/* Responsive Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 sm:gap-8
      ">
        {articles.map((article) => (
          <div
            key={article.id}
            className="
              group overflow-hidden rounded-2xl 
              border border-gray-200 bg-white
              transition-shadow duration-300
              hover:shadow-lg
            "
          >
            {/* IMAGE + CONTENT OVERLAY */}
            <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="
                  w-full h-full object-cover 
                  transition-transform duration-500 
                  group-hover:scale-105
                "
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="
                  bg-white/90 backdrop-blur-sm text-gray-900 
                  px-3 sm:px-4 py-1.5 rounded-full 
                  text-xs sm:text-sm font-medium
                ">
                  {article.category}
                </span>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white/80 text-xs sm:text-sm mb-1">
                  {article.date}
                </p>
                <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
                  {article.title}
                </h3>
              </div>
            </div>

            {/* READ MORE */}
            <div className="px-5 pb-5">
              <div
                className="
                  flex items-center gap-2 text-blue-700 font-medium cursor-pointer 
                  opacity-0 group-hover:opacity-100 
                  translate-y-2 group-hover:translate-y-0 
                  transition-all duration-300 text-sm sm:text-base
                "
              >
                <a href="">Read More</a>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
