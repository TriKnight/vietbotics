import React from "react";

const SectionHeader = ({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow: string;
  heading: string;
  subheading?: string;
}) => (
  <header className="max-w-3xl mx-auto text-center mb-12">
    <p className="text-sm uppercase tracking-[0.25em] text-gray-700 dark:text-brand mb-3">{eyebrow}</p>
    <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-heading-gradient pb-4">
      {heading}
    </h2>
    {subheading && (
      <p className="text-body text-base md:text-lg leading-relaxed">{subheading}</p>
    )}
  </header>
);

export default SectionHeader;
