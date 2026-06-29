"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import VoiceButton from "@/components/VoiceButton";
import ResultCard from "@/components/ResultCard";

export default function VoicePage() {
  const { text, listening, startListening } = useSpeechRecognition();

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const question = questions[current];

  async function evaluateCandidate(allAnswers: string[]) {
    setLoading(true);

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: allAnswers,
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("AI evaluation failed.");
    }

    setLoading(false);
  }

  const nextQuestion = () => {
    if (!text) {
      alert("Please answer the question first.");
      return;
    }

    const updated = [...answers, text];
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      evaluateCandidate(updated);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          🤖 AI is evaluating candidate...
        </h1>
      </main>
    );
  }

  if (result) {
    return (
      <main className="min-h-screen bg-gray-100 flex justify-center items-center">
        <ResultCard
          score={result.score}
          strengths={result.strengths}
          weaknesses={result.weaknesses}
          feedback={result.feedback}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex justify-center items-center">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl">

        <h1 className="text-5xl font-bold text-blue-700 text-center">
          AI Voice Onboarding
        </h1>

        <div className="mt-8">
          <ProgressBar
            current={current + 1}
            total={questions.length}
          />
        </div>

        <div className="mt-8">
          <QuestionCard question={question.text} />
        </div>

        <div className="mt-8">
          <VoiceButton
            listening={listening}
            onClick={startListening}
          />
        </div>

        <div className="mt-8 text-center">

          <div className="text-xl text-gray-700 min-h-[40px]">
            {text}
          </div>

          <button
            onClick={nextQuestion}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
          >
            Next Question
          </button>

        </div>

      </div>

    </main>
  );
}