import React from "react";

function BackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_384_2352"
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_384_2352)">
        <path
          fill="#fff"
          d="M12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6L12 20z"
        ></path>
      </g>
    </svg>
  );
}

export default BackIcon;
