"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          Jackie Jeans
        </h1>

        <div className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/manual" className="hover:text-blue-600">
            Manual
          </Link>

          <Link href="/voice" className="hover:text-blue-600">
            Voice AI
          </Link>
        </div>
      </div>
    </nav>
  );
}