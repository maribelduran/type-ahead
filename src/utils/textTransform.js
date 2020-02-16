import React from "react";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const HighlightText = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => {
        return part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="hl">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </span>
  );
};

export { numberWithCommas, HighlightText };
