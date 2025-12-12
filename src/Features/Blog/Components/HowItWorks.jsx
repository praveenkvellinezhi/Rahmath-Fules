import React from "react";

export default function BulkFuelWorking() {
  const steps = [
    {
      num: 1,
      title: "Fuel Order & Requirement Analysis",
      desc:
        "The Process Begins When A Business Places A Fuel Request Specifying Quantity, Fuel Type, And Delivery Time. The Supplier Checks Availability, Schedules The Delivery Slot, And Prepares The Dispatch Plan Based On Customer Needs.",
    },
    {
      num: 2,
      title: "Quality Testing & Certification",
      desc:
        "Before The Fuel Leaves The Depot, It Undergoes Laboratory Testing To Ensure It Meets UAE Safety And Performance Standards. Only Certified, Contaminant-Free Fuel Is Approved For Transportation.",
    },
    {
      num: 3,
      title: "Secure Loading at the Depot",
      desc:
        "Fuel Is Loaded Into Tankers Using Modern Pumps And Controlled Filling Systems. Safety Protocols — Such As Grounding, Flow Monitoring, And Spill Prevention — Are Followed To Ensure A Secure Transfer.",
    },
    {
      num: 4,
      title: "Transportation & GPS Monitoring",
      desc:
        "Once Loaded, The Fuel Tanker Begins Its Journey. In The UAE, Licensed Tankers Are Equipped With GPS Tracking, Allowing Real-Time Monitoring Of Routes And Delivery Status. Trained And Certified Drivers Ensure Safe Movement Across All Emirates.",
    },
    {
      num: 5,
      title: "On-Site Delivery to the Customer",
      desc:
        "Upon Arrival, Safety Checks Are Conducted Before Offloading Begins Using Sealed Hoses And Calibrated Meters. Fuel Is Dispensed Directly Into Storage Tanks, Generators, Or Fleet Vehicles Based On Customer Requirements.",
    },
  ];

  return (
    <div className="w-full bg-white lg:px-10 sm:px-10 py-12">

      {/* TITLE + LINES EXACT LIKE YOUR IMAGE */}
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <span className="hidden sm:block w-12 border-t border-gray-400"></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <span className="hidden sm:block w-12 border-t border-gray-400"></span>
        </div>
      </div>

      {/* CENTERED CONTENT LIKE YOUR REFERENCE */}
      <div className=" mx-auto space-y-10">

        {steps.map((step) => (
          <div key={step.num} className="flex gap-5 sm:gap-6 items-start">

            {/* NUMBER CIRCLE */}
            <div className="flex-shrink-0">
              <div className="
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full bg-blue-100 text-blue-600 
                flex items-center justify-center 
                font-semibold text-base sm:text-lg
              ">
                {step.num}
              </div>
            </div>

            {/* TEXT CONTENT EXACT LIKE THE IMAGE */}
            <div className="">
              <h3 className="text-[27px] sm:text-xl font-semibold text-[#3F3F3F] mb-3">
                {step.title}
              </h3>

              <p className="text-[#3F3F3F] text-[24px] sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
