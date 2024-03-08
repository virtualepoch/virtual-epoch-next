"use client";
import { useState, useEffect } from "react";

export const Typewriter = ({ children, typeSpeed = 50, delay }) => {
  const text = children.split("");
  const [currentCharacter, setCurrentCharacter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentCharacter((prev) => prev + 1);
      }, typeSpeed);

      return () => clearInterval(interval);
    }, delay);
  }, [typeSpeed, delay]);

  return <span>{text.slice(0, currentCharacter + 1)}</span>;
};
