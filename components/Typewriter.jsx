"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words = [
    "MERN Full-Stack Developer",
    "Next.js & TypeScript Builder",
    "Open to Internships",
  ],
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = deleting ? 35 : text === word ? 1600 : 70;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI(i + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="text-xl inline-block min-h-[1.75rem]">
      {text}
      <span className="inline-block w-[2px] h-5 bg-accent ml-1 align-middle animate-pulse" />
    </span>
  );
}
