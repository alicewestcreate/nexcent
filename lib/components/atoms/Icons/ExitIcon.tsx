import React from "react";
import type { IconProps } from "./IconProps";

const ExitIcon = ({ color = "black" }: IconProps) => {
  return (
    <svg fill={color} viewBox="0 0 600 500" width="40" height="40">
      <g>
        <g>
          <polygon
            points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256 		"
          />
        </g>
      </g>
    </svg>
  );
};

export default ExitIcon;
