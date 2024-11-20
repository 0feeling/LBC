import React from "react";
import "./Pages.css";

const Pages = ({ pageTotal, setpageNum, pageNum }) => {
  // Build an array of pages
  const pagesArr = [];
  for (let i = 1; i <= pageTotal; i++) {
    pagesArr.push(i);
  }

  const handlePrev = () => {
    if (pageNum > 1) {
      setpageNum(pageNum - 1);
    }
  };

  const handleNext = () => {
    if (pageNum < pageTotal) {
      setpageNum(pageNum + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrev}
        disabled={pageNum === 1}
        aria-label="Previous page"
      >
        Précédente
      </button>
      <ul className="pages">
        {pagesArr.map((i) => (
          <li
            key={i}
            onClick={() => setpageNum(i)}
            className={pageNum === i ? "active" : ""}
            aria-current={pageNum === i ? "page" : undefined}
          >
            {i}
          </li>
        ))}
      </ul>
      <button
        onClick={handleNext}
        disabled={pageNum === pageTotal}
        aria-label="Next page"
      >
        Suivante
      </button>
    </div>
  );
};

export default Pages;
