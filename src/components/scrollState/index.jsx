import { useState, useEffect } from "react";

const useScrollStates = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSecond(scrollY > 200);
      setThird(scrollY > 1000);
      setFourth(scrollY > 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { second, third, fourth };
};

export default useScrollStates;
