import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-base-content mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-3">🩺 DoctorNow</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Bangladesh&apos;s trusted doctor appointment platform. Book, manage,
            and track your health care with ease.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-appointments"
                className="hover:text-primary transition"
              >
                All Appointments
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-primary transition">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-5 mt-4 md:mt-0 text-lg text-black">
            <span className="cursor-pointer">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer">
              <FaLinkedin />
            </span>
            <span className="cursor-pointer">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300 text-center py-4 text-sm text-gray-400">
        © 2026 DoctorNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
