import React from 'react'

type Props = {
    color:string
}

function HomeIcon({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_354_1055"
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_354_1055)">
        <path
            fill={color ? color : "#ED60CE"}
          d="M4 21v-9.375L2.2 13 1 11.4 12 3l11 8.4-1.2 1.575-1.8-1.35V21H4zm4-6a.968.968 0 01-.713-.288A.967.967 0 017 14a.97.97 0 01.287-.713A.97.97 0 018 13a.97.97 0 01.713.287A.97.97 0 019 14c0 .283-.096.52-.287.712A.968.968 0 018 15zm4 0a.965.965 0 01-.712-.288A.965.965 0 0111 14c0-.283.096-.521.288-.713A.967.967 0 0112 13a.97.97 0 01.713.287A.97.97 0 0113 14c0 .283-.096.52-.287.712A.968.968 0 0112 15zm4 0a.965.965 0 01-.712-.288A.965.965 0 0115 14c0-.283.096-.521.288-.713A.967.967 0 0116 13c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0116 15z"
        ></path>
      </g>
    </svg>
  )
}

export default HomeIcon