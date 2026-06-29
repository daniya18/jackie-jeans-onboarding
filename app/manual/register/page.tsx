"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      router.push("/voice");
    }, 1000);
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-blue-700 text-center">
          Employee Registration
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Complete your details before starting the AI Voice Interview.
        </p>

        <div className="flex justify-center items-center gap-4 mt-10 mb-10">

          <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
            1 Registration
          </div>

          <div className="h-1 w-16 bg-gray-300"></div>

          <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
            2 AI Interview
          </div>

          <div className="h-1 w-16 bg-gray-300"></div>

          <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
            3 Evaluation
          </div>

        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              required
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
            />

            <input
              required
              placeholder="Phone Number"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
            />

            <input
              required
              placeholder="Position Applied For"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
            />

            <input
              required
              placeholder="Highest Qualification"
              className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <textarea
            rows={4}
            placeholder="Skills"
            className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={5}
            placeholder="Tell us about yourself"
            className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
          />

          <label className="flex items-center gap-3">

            <input required type="checkbox" />

            <span>
              I certify that the information provided is true.
            </span>

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-bold transition"
          >
            {loading
              ? "Redirecting..."
              : "Submit & Continue to AI Voice Interview →"}
          </button>

        </form>

      </div>

    </main>
  );
}