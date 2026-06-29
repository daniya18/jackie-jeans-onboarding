export function calculateScore(answers: string[]) {

  let communication = 10;
  let confidence = 10;
  let teamwork = 10;
  let learning = 10;
  let problemSolving = 10;

  answers.forEach((answer) => {

    const text = answer.toLowerCase();

    // Communication
    if (
      text.includes("communicate") ||
      text.includes("customer") ||
      text.includes("people") ||
      text.includes("presentation")
    ) {
      communication += 3;
    }

    // Confidence
    if (
      text.includes("confident") ||
      text.includes("challenge") ||
      text.includes("lead")
    ) {
      confidence += 3;
    }

    // Teamwork
    if (
      text.includes("team") ||
      text.includes("together") ||
      text.includes("group")
    ) {
      teamwork += 3;
    }

    // Learning
    if (
      text.includes("learn") ||
      text.includes("improve") ||
      text.includes("growth")
    ) {
      learning += 3;
    }

    // Problem Solving
    if (
      text.includes("solve") ||
      text.includes("problem") ||
      text.includes("decision")
    ) {
      problemSolving += 3;
    }

    // Bonus for detailed answers
    if (answer.length > 80) {
      communication++;
      confidence++;
      teamwork++;
      learning++;
      problemSolving++;
    }

  });

  communication = Math.min(20, communication);
  confidence = Math.min(20, confidence);
  teamwork = Math.min(20, teamwork);
  learning = Math.min(20, learning);
  problemSolving = Math.min(20, problemSolving);

  const total =
    communication +
    confidence +
    teamwork +
    learning +
    problemSolving;

  return {
    total,
    communication,
    confidence,
    teamwork,
    learning,
    problemSolving,
  };
}