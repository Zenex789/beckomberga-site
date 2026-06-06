"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface Props {
  words: string[];
  intervalMs?: number;
}

export default function RotatingWords({ words, intervalMs = 2800 }: Props) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const titles = useMemo(() => (words.length > 0 ? words : [""]), [words]);
  const longest = useMemo(
    () => titles.reduce((a, b) => (b.length > a.length ? b : a), titles[0]),
    [titles]
  );

  useEffect(() => {
    if (reduceMotion || titles.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i === titles.length - 1 ? 0 : i + 1)),
      intervalMs
    );
    return () => clearInterval(id);
  }, [titles, intervalMs, reduceMotion]);

  if (reduceMotion) return <span>{titles[0]}</span>;

  return (
    <span className="relative block overflow-hidden">
      <span className="invisible block" aria-hidden>
        {longest}
      </span>
      {titles.map((word, i) => (
        <motion.span
          key={word}
          className="absolute inset-x-0 top-0"
          initial={false}
          transition={{ type: "spring", stiffness: 75, damping: 18 }}
          animate={
            i === index
              ? { y: 0, opacity: 1 }
              : { y: i < index ? -52 : 52, opacity: 0 }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
