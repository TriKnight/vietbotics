import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";
import { socialLinks } from "@/data/home";

export const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  Facebook: FaFacebook,
};

// Compact row of social icons for the nav bar
const SocialLinks = ({ className }: { className?: string }) => (
  <ul className={className}>
    {socialLinks
      .filter((s) => s.href)
      .map((s) => {
        const Icon = socialIcons[s.name];
        return (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              title={s.name}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink/70 hover:bg-line/5 hover:text-cta transition-colors"
            >
              {Icon ? <Icon size={18} /> : s.name}
            </a>
          </li>
        );
      })}
  </ul>
);

export default SocialLinks;
