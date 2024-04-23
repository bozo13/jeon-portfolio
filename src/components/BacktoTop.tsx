import React from "react";

const BackToTopButton: React.FC = () => {
  const backToTop = () => window.scrollTo({ top: 0 });

  return (
    <button  onClick={backToTop} aria-label="Back to top">
      Back to top
    </button>
  );
};

export default BackToTopButton;

