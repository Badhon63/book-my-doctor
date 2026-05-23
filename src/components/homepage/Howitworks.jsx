import React from "react";
import {
  FiSearch,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Browse Doctors",
      description:
        "Explore our network of qualified and experienced doctors across various specialties.",
      icon: FiSearch,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      number: "02",
      title: "View Details",
      description:
        "Check doctor profiles, experience, qualifications, and patient reviews to make an informed choice.",
      icon: FiFileText,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      number: "03",
      title: "Book Appointment",
      description:
        "Select your preferred date and time slot. Fill in your details and confirm your booking instantly.",
      icon: FiCalendar,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      number: "04",
      title: "Get Confirmation",
      description:
        "Receive instant confirmation and appointment details. Manage your bookings anytime from your dashboard.",
      icon: FiCheckCircle,
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="py-10 md:pt-20 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Booking a doctor&apos;s appointment has never been easier. Follow
            these simple steps to schedule your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                <div
                  className={`${step.color} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
                >
                  <div className="mb-6">
                    <span className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full font-bold text-gray-900 text-lg shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  <div className="mb-6">
                    <IconComponent
                      className={`${step.iconColor} w-10 h-10 transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md border-2 border-gray-200">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 md:mt-10 text-center">
          <p className="text-gray-600 mb-6">Ready to get started?</p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Browse Doctors Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
