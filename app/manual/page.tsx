"use client";

import Link from "next/link";

export default function ManualIntro() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-700 to-sky-500 flex items-center justify-center">

      <div className="max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left */}

        <div className="p-10 bg-blue-700 text-white flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            Jackie Jeans
          </h1>

          <h2 className="text-3xl mt-5">
            Employee Onboarding Portal
          </h2>

          <p className="mt-8 text-lg leading-8">
            Welcome!

            Complete your onboarding in three simple steps.
          </p>

          <div className="space-y-5 mt-10">

            <div>✅ Employee Registration</div>

            <div>🎤 AI Voice Interview</div>

            <div>🤖 AI Evaluation</div>

            <div>📄 Download PDF Report</div>

          </div>

        </div>

        {/* Right */}

        <div className="p-10 flex flex-col justify-center items-center">

          <img
            src="/team.jpg"
            alt="Team"
            className="rounded-3xl shadow-xl w-full h-80 object-cover"
          />

          <Link href="/manual/register">

            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-xl font-bold">

              Start Registration →

            </button>

          </Link>

        </div>

      </div>

    </main>
  );
}