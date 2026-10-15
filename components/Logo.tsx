import React from "react";

// Inline copy of public/logo_openmind/LOGO_OP_Robotics.svg so the wordmark colour can adapt to dark
// backgrounds (the file's text is #2d2d2d). `id` keeps gradient ids unique when used twice on a page.
const Logo = ({
  id,
  className,
  textColor = "currentColor",
}: {
  id: string;
  className?: string;
  textColor?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 320"
    role="img"
    aria-label="OpenMind Robotics"
    className={className}
  >
    <defs>
      <linearGradient id={`${id}-blue`} x1="10%" y1="40%" x2="40%" y2="10%">
        <stop offset="0%" stopColor="#1b416b" />
        <stop offset="25%" stopColor="#2d649c" />
        <stop offset="50%" stopColor="#5496d6" />
        <stop offset="75%" stopColor="#296097" />
        <stop offset="100%" stopColor="#143254" />
      </linearGradient>
      <linearGradient id={`${id}-silver`} x1="10%" y1="10%" x2="50%" y2="90%">
        <stop offset="0%" stopColor="#73777c" />
        <stop offset="25%" stopColor="#cbced3" />
        <stop offset="50%" stopColor="#f2f4f7" />
        <stop offset="75%" stopColor="#e1e4e9" />
        <stop offset="100%" stopColor="#56595d" />
      </linearGradient>
      <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
      </linearGradient>
    </defs>

    <path d="M 160 76.5 A 83.5 83.5 0 0 1 229 207.5" fill="none" stroke={`url(#${id}-silver)`} strokeWidth="41" />
    <path
      d="M 229 207.5 A 83.5 83.5 0 1 1 160 76.5"
      fill="none"
      stroke={`url(#${id}-blue)`}
      strokeWidth="41"
      strokeLinecap="round"
    />
    <circle cx="160" cy="160" r="83.5" fill="none" stroke={`url(#${id}-shine)`} strokeWidth="41" />
    <circle cx="160" cy="160" r="104" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
    <circle cx="160" cy="160" r="63" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />

    <g fill={textColor} fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="120">
      <text x="300" y="142" letterSpacing="-1">OPENMIND</text>
      <text x="300" y="250" letterSpacing="1">ROBOTICS</text>
    </g>
  </svg>
);

export default Logo;
