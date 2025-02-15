import React from 'react'

const css = `
  svg > style + path {
    fill: black;
  }
  svg > style + path + path {
    fill: white;
  }
  html[data-theme="dark"] svg > style + path {
    fill: transparent;
  }
  html[data-theme="dark"] svg > style + path + path {
    fill: white;
  }
  .graphic-logo {
    max-width: 100px;
    width: auto;
    height: auto;
  }`

export const Logo = () => {
  return (
    <svg
      className="graphic-logo"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 432.86 432.86"
    >
      <style type="text/css">{css}</style>
      <path d="M0 0h432.86v432.86H0z" />
      <path
        fill="#fff"
        d="M85.28 110.86h50.35c27.79 0 50.35 22.56 50.35 50.35 0 27.79-22.56 50.35-50.35 50.35H85.28V110.87ZM297.23 211.56h-50.35c-27.81 0-50.35-22.54-50.35-50.35 0-27.81 22.54-50.35 50.35-50.35h50.35M85.55 221.31h94.11c27.79 0 50.35 22.56 50.35 50.35 0 27.79-22.56 50.35-50.35 50.35H85.55V221.32ZM246.88 221.31h50.35c27.81 0 50.35 22.54 50.35 50.35 0 27.81-22.54 50.35-50.35 50.35h-50.35"
      />
    </svg>
  )
}
