"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book an appointment with a doctor?",
      answer:
        "Browse our list of doctors, click on the one you prefer, view their profile and availability, select your preferred date and time, fill in your details, and confirm your booking. You'll receive instant confirmation on your dashboard.",
    },
    {
      question: "Can I update or cancel my appointment?",
      answer:
        "Yes, you can easily update or cancel your appointments from your dashboard. Click on 'My Bookings' to manage all your appointments. You can change the date, time, or cancel entirely. Changes are instant and you'll receive a notification.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods including credit/debit cards, mobile banking, and digital wallets. Payment is processed securely through our encrypted gateway. You only pay when you book your appointment.",
    },
    {
      question: "How far in advance should I book an appointment?",
      answer:
        "You can book appointments as soon as today or up to 30 days in advance, depending on doctor availability. Most doctors have slots available, so you can usually find a convenient time that suits your schedule.",
    },
    {
      question: "Are the doctors on your platform qualified and verified?",
      answer:
        "Absolutely. All doctors on DocAppoint are licensed medical professionals with verified credentials and experience. We thoroughly vet all doctors to ensure they meet our high standards of quality and patient care.",
    },
    {
      question: "What should I do if I need to reschedule my appointment?",
      answer:
        "Go to your dashboard, navigate to 'My Bookings', and click the 'Update' button on your appointment. You can change the date, time, or even switch to another doctor if needed. The update takes effect immediately.",
    },
    {
      question: "Can I view my appointment history?",
      answer:
        "Yes, all your past and upcoming appointments are visible in your dashboard under 'My Bookings'. You can see appointment details, doctor information, and confirmation receipts for all your bookings.",
    },
    {
      question: "How do I reset my password if I forget it?",
      answer:
        "Click the 'Forgot Password' link on the login page, enter your registered email address, and we'll send you a reset link. Follow the link to create a new password and regain access to your account.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-5 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about booking appointments and
            managing your profile.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between p-6 text-left font-semibold transition-colors duration-300 ${
                  openIndex === index
                    ? "bg-blue-50 text-blue-900"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="text-lg pr-4">{faq.question}</span>
                <FiChevronDown
                  className={`shrink-0 w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team
            is here to help.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
