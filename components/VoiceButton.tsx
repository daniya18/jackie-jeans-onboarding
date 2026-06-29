"use client";

import { FaMicrophone } from "react-icons/fa";

type Props = {
  listening: boolean;
  onClick: () => void;
};

export default function VoiceButton({
  listening,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-bold transition"
    >
      <FaMicrophone className="inline mr-2" />

      {listening ? "Listening..." : "Start Voice Onboarding"}
    </button>
  );
}