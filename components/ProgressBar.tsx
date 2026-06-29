type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-center text-gray-600">
        Question {current} of {total}
      </p>
    </div>
  );
}