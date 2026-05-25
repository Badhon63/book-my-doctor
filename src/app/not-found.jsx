"use client";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFoundPage = () => {
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
          <div className="text-9xl md:text-[150px] font-black text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 leading-none">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
            Oops! It looks like you&apos;ve ventured into uncharted territory.
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="pt-4 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                <FiHome className="w-5 h-5" />
                Go Home
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-300 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>

        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <Link href="/all-appointments">
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <p className="font-semibold text-gray-900">Appointments</p>
              <p className="text-sm text-gray-600">Browse all doctors</p>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <p className="font-semibold text-gray-900">Dashboard</p>
              <p className="text-sm text-gray-600">Your bookings</p>
            </div>
          </Link>
          <Link href="/">
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <p className="font-semibold text-gray-900">Home</p>
              <p className="text-sm text-gray-600">Start fresh</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
