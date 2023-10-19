import React from 'react'
import type { IconProps } from "./IconProps";

const HamBurgerIcon= ({ color = 'black' }: IconProps) => {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20" fill={color}></rect>
  <rect y="30" width="100" height="20" fill={color}></rect>
  <rect y="60" width="100" height="20" fill={color}></rect>
</svg>
  )
}

export default HamBurgerIcon