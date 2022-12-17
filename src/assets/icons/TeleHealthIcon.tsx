import React from "react";

type Props = {
    color:string
}

function TeleHealthIcon({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <mask
        id="mask0_211_535"
        style={{ maskType: "alpha" }}
        width="25"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0.75 0H24.75V24H0.75z"></path>
      </mask>
      <g mask="url(#mask0_211_535)">
        <path
          fill={color ? color : "#ED60CE"}
          d="M7.75 18h2v-2h2v-2h-2v-2h-2v2h-2v2h2v2zm6-3.5h6V13h-6v1.5zm0 3h4V16h-4v1.5zm-9 4.5c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 012.75 20V9c0-.55.196-1.021.588-1.413A1.925 1.925 0 014.75 7h5V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0111.75 2h2c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v3h5c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v11c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120.75 22h-16zm7-13h2V4h-2v5z"
        ></path>
      </g>
    </svg>
  );
}

export default TeleHealthIcon;
