import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video';
import myVideo from '/videos/intro.mp4'; 
 
const InfoVideo = () => {
  return (
    <video
      src="/videos/intro-optimized.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-auto object-cover rounded-xl"
    />
  );
};
export default InfoVideo;