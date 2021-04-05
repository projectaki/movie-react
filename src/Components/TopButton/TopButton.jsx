import React, { useEffect } from "react";
import "./TopButton.css";
const TopButton = () => {
  useEffect(() => {
    window.onscroll = function () {
      scrollHandler();
    };
    scrollHandler();
    window.onclick = function () {
      const elem = document.getElementById("mobile-menu");

      elem.classList.remove("toggle");
    };
  }, []);

  const scrollHandler = () => {
    const elem = document.getElementById("top-button");
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  };

  const clickHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <i
      onClick={() => clickHandler()}
      id="top-button"
      className="fas fa-chevron-circle-up fa-3x top-button"
    ></i>
  );
};

export default TopButton;
