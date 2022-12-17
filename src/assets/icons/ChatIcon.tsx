import React from "react";

type Props = {
    color:string
}

function ChatIcon({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <mask
        id="mask0_211_540"
        style={{ maskType: "alpha" }}
        width="25"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0.5 0H24.5V24H0.5z"></path>
      </mask>
      <g mask="url(#mask0_211_540)">
        <path
          fill={color ? color : "#ED60CE"}
          d="M6.5 14h8v-2h-8v2zm0-3h12V9h-12v2zm0-3h12V6h-12v2zm-4 14V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 014.5 2h16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120.5 18h-14l-4 4z"
        ></path>
      </g>
    </svg>
  );
}

export default ChatIcon;
