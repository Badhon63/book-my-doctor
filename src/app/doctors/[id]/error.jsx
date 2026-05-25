"use client";
import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-cyan-50 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500">
            Error
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Something Went Wrong
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
            We encountered an error while loading this doctor&apos;s
            information. Please try again or go back.
          </p>
        </div>

        <div className="pt-4 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => reset()}
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Try Again
            </button>
            <Link href="/all-appointments">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-blue-300 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-300">
                <FiArrowLeft className="w-5 h-5" />
                Back to Appointments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
