import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export const Typewriter = ({ styles, text, pause }) => {
  const delay = 70;
  
  return (
    <li>
      <TypewriterComponent
        options={{
          delay: delay,
          autoStart: false,
          skipAddStyles: true,
          wrapperClassName: styles.text,
          cursorClassName: styles.cursor,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(pause * delay)

            .typeString(text)

            .start();
        }}
      />
    </li>
  );
};
