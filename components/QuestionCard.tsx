type Props = {
  question: string;
};

export default function QuestionCard({ question }: Props) {
  return (
    <div className="bg-blue-100 rounded-xl p-8 text-center shadow">
      <h2 className="text-3xl font-bold text-gray-900">
        {question}
      </h2>
    </div>
  );
}