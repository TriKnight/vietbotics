import React from "react";
import type { Lang } from "@/data/applications";
import SiteNav from "./SiteNav";
import HeroBanner from "./HeroBanner";
import Applications from "./Applications";
import Technology from "./Technology";
import WhyUs from "./WhyUs";
import Partners from "./Partners";
import SiteFooter from "./SiteFooter";

const HomePage = ({ lang }: { lang: Lang }) => (
  <>
    <SiteNav lang={lang} />
    <HeroBanner lang={lang} />
    <Applications lang={lang} />
    <Technology lang={lang} />
    <WhyUs lang={lang} />
    <Partners lang={lang} />
    <SiteFooter lang={lang} />
  </>
);

export default HomePage;
