import React from "react";

type Props = {
    color:string
}

function CircleLeft({color}:Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <mask
        id="mask0_361_2348"
        style={{ maskType: "alpha" }}
        width="30"
        height="30"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H30V30H0z"></path>
      </mask>
      <g mask="url(#mask0_361_2348)">
        <path
          fill={color ? color : "#ED60CE"}
          d="M15 20l1.75-1.75-2-2H20v-2.5h-5.25l2-2L15 10l-5 5 5 5zm0 7.5c-1.73 0-3.354-.328-4.875-.985a12.614 12.614 0 01-3.969-2.671 12.615 12.615 0 01-2.671-3.969C2.828 18.355 2.5 16.729 2.5 15c0-1.73.328-3.354.985-4.875a12.614 12.614 0 012.671-3.969 12.632 12.632 0 013.969-2.672C11.645 2.828 13.271 2.5 15 2.5c1.73 0 3.354.328 4.875.984a12.633 12.633 0 013.969 2.672 12.614 12.614 0 012.671 3.969c.657 1.52.985 3.146.985 4.875 0 1.73-.328 3.354-.985 4.875a12.614 12.614 0 01-2.671 3.969 12.614 12.614 0 01-3.969 2.671c-1.52.657-3.146.985-4.875.985z"
        ></path>
      </g>
    </svg>
  );
}

export default CircleLeft;
