export interface Answer {
  question: string;
  answer: string;
}

export interface Question {
  id: number;
  text: string;
}

export interface Report {
  name: string;
  score: number;
  personality: string;
  answers: Answer[];
}