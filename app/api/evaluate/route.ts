import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { answers } = await req.json();

  // Simulate AI thinking
  await new Promise((resolve) => setTimeout(resolve, 2000));

  let score = 70;

  const strengths: string[] = [];
  const weaknesses: string[] = [];

  answers.forEach((answer: string) => {
    const text = answer.toLowerCase();

    if (
      text.includes("team") ||
      text.includes("learn") ||
      text.includes("hard work") ||
      text.includes("responsible")
    ) {
      score += 5;
      strengths.push("Positive attitude");
    }

    if (
      text.includes("communication") ||
      text.includes("customer") ||
      text.includes("people")
    ) {
      score += 5;
      strengths.push("Good communication");
    }

    if (answer.length < 20) {
      weaknesses.push("Answers could be more detailed.");
      score -= 5;
    }
  });

  score = Math.max(50, Math.min(score, 100));

  if (strengths.length === 0)
    strengths.push("Willingness to participate.");

  if (weaknesses.length === 0)
    weaknesses.push("Continue improving confidence.");

  const feedback =
    score >= 90
      ? "Excellent candidate. Highly recommended for hiring."
      : score >= 80
      ? "Strong candidate with good communication and teamwork skills."
      : score >= 70
      ? "Good candidate. Recommended for the next interview round."
      : "Candidate shows potential but should improve communication and confidence.";

  return NextResponse.json({
    score,
    strengths: [...new Set(strengths)],
    weaknesses: [...new Set(weaknesses)],
    feedback,
  });
}