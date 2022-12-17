import React from "react";

type Props = {
    color:string
}

function SehatIcon({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <mask
        id="mask0_211_545"
        style={{ maskType: "alpha" }}
        width="25"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0.25 0H24.25V24H0.25z"></path>
      </mask>
      <g mask="url(#mask0_211_545)">
        <path
          fill={color ? color : "#ED60CE"}
          d="M10.75 15.5h3V13h2.5v-3h-2.5V7.5h-3V10h-2.5v3h2.5v2.5zm1.5 6.5c-2.317-.583-4.229-1.913-5.737-3.988C5.004 15.937 4.25 13.633 4.25 11.1V5l8-3 8 3v6.1c0 2.533-.754 4.837-2.262 6.912-1.509 2.075-3.421 3.405-5.738 3.988z"
        ></path>
      </g>
    </svg>
  );
}

export default SehatIcon;
