"use client";
import React from "react";
import type { Lang } from "@/data/applications";
import { localeHref, nav } from "@/data/home";
import ContactButton from "./ContactButton";

// One entry of the site nav: a link, or a button that opens the contact form for `form` items
const NavLink = ({
  lang,
  item,
  className,
  onClick,
}: {
  lang: Lang;
  item: (typeof nav)[number];
  className?: string;
  onClick?: () => void;
}) =>
  item.form ? (
    <ContactButton lang={lang} topic={item.label[lang]} className={className}>
      {item.label[lang]}
    </ContactButton>
  ) : (
    <a href={localeHref(lang, item.href)} onClick={onClick} className={className}>
      {item.label[lang]}
    </a>
  );

export default NavLink;
