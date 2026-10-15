import React from "react";
import Image from "next/image";
import type { Lang } from "@/data/applications";
import { partnerLogos, partnersCopy } from "@/data/home";
import SectionHeader from "./SectionHeader";

const Partners = ({ lang }: { lang: Lang }) => {
  const copy = partnersCopy[lang];
  // The list is rendered twice so the -50% scroll animation loops seamlessly.
  const loop = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="w-full py-20 scroll-mt-28">
      <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} subheading={copy.subheading} />

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <ul
          className="flex w-max gap-5 animate-scroll hover:[animation-play-state:paused]"
          style={{ "--animation-duration": `${partnerLogos.length * 6}s` } as React.CSSProperties}
        >
          {loop.map((logo, i) => (
            <li
              key={i}
              aria-hidden={i >= partnerLogos.length}
              title={logo.name}
              className="flex h-24 w-52 shrink-0 items-center justify-center rounded-xl border border-line/10 bg-white px-6 py-4"
            >
              {/* Fill a fixed box so logos with very different aspect ratios get equal visual weight */}
              <div className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="208px"
                  // Next's image optimizer rejects SVGs (400); serve them as-is.
                  unoptimized={logo.src.endsWith(".svg")}
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
