"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-700 to-sky-500 text-white flex items-center pt-20">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            Jackie Jeans
          </h1>

          <h2 className="text-4xl mt-3 font-semibold">
            AI Employee Onboarding
          </h2>

          <p className="mt-8 text-xl leading-8">
            Intelligent onboarding with voice interviews,
            smart evaluation, HR analytics and PDF reports.
          </p>

          <div className="flex gap-5 mt-10">

            <Link href="/manual">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                Manual Onboarding
              </button>
            </Link>

            <Link href="/voice">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold">
                🎤 AI Voice
              </button>
            </Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img
  src="/team.jpg"
  alt="Team"
  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
/>
        </motion.div>

      </div>

    </section>
  );
}