/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';
import { i18n } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com']
  },
 
};

export default withNextVideo(nextConfig);


 

 
