/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';

// Static media is cached by browsers for a week and served stale while it revalidates for a month,
// so repeat visits don't re-check every video. Give a replaced file a new name to bust the cache immediately.
const mediaCache = [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=2592000' }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 604800,
  },
  async headers() {
    return ['/videos/:path*', '/logos/:path*', '/logo_openmind/:path*'].map((source) => ({
      source,
      headers: mediaCache,
    }));
  },
};

export default withNextVideo(nextConfig);
