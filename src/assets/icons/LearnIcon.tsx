import React from 'react'

type Props = {
    color:string
}

function LearnIcon({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_211_530"
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_211_530)">
        <path
          fill={color ? color : "#ED60CE"}
          d="M9.5 11l-.95 2.05L6.5 14l2.05.95L9.5 17l.95-2.05L12.5 14l-2.05-.95L9.5 11zm6 0l-.65 1.35-1.35.65 1.35.65.65 1.35.65-1.35L17.5 13l-1.35-.65L15.5 11zM4 4l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h3c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120 20H4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 012 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 014 4z"
        ></path>
      </g>
    </svg>
  )
}

export default LearnIcon