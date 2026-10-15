/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com']
  },
 
};

export default withNextVideo(nextConfig);


 

 
