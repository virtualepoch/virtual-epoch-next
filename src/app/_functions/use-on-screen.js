import { useEffect, useRef } from "react";

export const useOnScreen = (ref, callback, options = {}) => {
  const observer = useRef();

  useEffect(() => {
    const element = ref.current;

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.current.observe(element);

    return () => {
      observer.current.disconnect();
    };
  }, [ref, callback, options]);
};
