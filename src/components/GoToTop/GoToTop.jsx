import React, { useEffect, useState } from "react";
import "./goToTop.css";
import { FaArrowUp } from "react-icons/fa";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toTheTop = () => {
    window.scrollTo(0, 0);
  };

  const listenToScroll = () => {
    let heightToHidden = 450;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="top-btn" onClick={toTheTop}>
          <FaArrowUp className="top-btn-icon" />
        </div>
      )}
    </>
  );
};
