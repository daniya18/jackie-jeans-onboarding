"use client";

import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

type Props = {
  score: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
};

export default function ResultCard({
  score,
  strengths,
  weaknesses,
  feedback,
}: Props) {

  const recommendation =
    score >= 85
      ? "🟢 HIRE"
      : score >= 70
      ? "🟡 CONSIDER"
      : "🔴 REJECT";

  const downloadPDF = () => {
    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text("Jackie Jeans", 20, 20);

    pdf.setFontSize(18);
    pdf.text("AI Candidate Evaluation Report", 20, 35);

    pdf.setFontSize(16);
    pdf.text(`Overall Score : ${score}/100`, 20, 55);

    pdf.text(`Recommendation : ${recommendation}`, 20, 70);

    pdf.setFontSize(15);
    pdf.text("Strengths", 20, 90);

    strengths.forEach((item, index) => {
      pdf.text(`• ${item}`, 30, 100 + index * 10);
    });

    let y = 110 + strengths.length * 10;

    pdf.text("Weaknesses", 20, y);

    weaknesses.forEach((item, index) => {
      pdf.text(`• ${item}`, 30, y + 10 + index * 10);
    });

    y += 20 + weaknesses.length * 10;

    pdf.text("AI Feedback", 20, y);

    pdf.setFontSize(13);

    const lines = pdf.splitTextToSize(feedback, 160);

    pdf.text(lines, 20, y + 10);

    pdf.save("JackieJeans_AI_Report.pdf");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full"
    >
      <h1 className="text-5xl font-bold text-center text-blue-700">
        AI Evaluation Complete
      </h1>

      <div className="mt-10 text-center">

        <p className="text-2xl">
          Overall Score
        </p>

        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-bold text-green-600 mt-4"
        >
          {score}/100
        </motion.h2>

        <div className="mt-4 text-3xl font-bold">
          {recommendation}
        </div>

      </div>

      <div className="grid grid-cols-2 gap-10 mt-12">

        <div>

          <h2 className="text-3xl font-bold text-green-600 mb-5">
            💪 Strengths
          </h2>

          <ul className="space-y-3">

            {strengths.map((item, index) => (

              <li
                key={index}
                className="bg-green-100 rounded-lg p-3"
              >
                ✔ {item}
              </li>

            ))}

          </ul>

        </div>

        <div>

          <h2 className="text-3xl font-bold text-red-600 mb-5">
            ⚠ Weaknesses
          </h2>

          <ul className="space-y-3">

            {weaknesses.map((item, index) => (

              <li
                key={index}
                className="bg-red-100 rounded-lg p-3"
              >
                • {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

      <div className="mt-12">

        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          🤖 AI Feedback
        </h2>

        <div className="bg-blue-50 rounded-xl p-6 text-lg leading-8">
          {feedback}
        </div>

      </div>

      <div className="flex justify-center mt-12">

        <button
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-xl font-semibold"
        >
          📄 Download PDF Report
        </button>

      </div>

    </motion.div>
  );
}