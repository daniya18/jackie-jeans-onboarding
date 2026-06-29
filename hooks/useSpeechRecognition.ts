"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default function useSpeechRecognition() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);

    recognition.onend = () => setListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

 const startListening = () => {
  if (!recognitionRef.current) return;

  try {
    recognitionRef.current.start();
  } catch (err) {
    console.log("Already listening");
  }
};

  return {
    text,
    listening,
    startListening,
  };
}