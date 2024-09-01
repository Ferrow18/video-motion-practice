"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Video = () => {
  const container = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const videoTimestamp = useTransform(scrollYProgress, [0, 1], ["0", "7"]);
  const xFirst = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    ["0px", "0px", "-4500px"]
  );
  const xSecond = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    ["1200px", "1200px", "0px"]
  );

  useMotionValueEvent(videoTimestamp, "change", (latest: any) => {
    const video = videoRef.current;
    if (video) {
      const duration = video.duration; // Video duration in seconds
      if (!isNaN(duration)) {
        // Set the video time according to the scroll position
        video.currentTime = parseFloat(latest);
      }
    }
  });

  return (
    <div className="relative h-[300vh]">
      <div
        ref={container}
        className="absolute top-0 w-full h-[300vh] overflow-clip"
      >
        <div className="sticky top-0">
          <motion.video
            ref={videoRef}
            className="object-cover h-[100vh] w-full"
            muted
            loop
            src="/machine_encoded.mp4"
            // src="https://res.cloudinary.com/dx8majtk1/video/upload/ac_none,c_scale,ki_0.1,q_auto,vc_h264,w_1680/v1711028378/lightshiprv-scroll-video-vimeo_ikhngx.mp4"
          />
          <div className="absolute top-[30%] left-[50%] translate-x-[-50%] h-[100vh]">
            <motion.p
              style={{ x: xFirst }}
              className="relative text-5xl [text-shadow:4px_4px_8px_black]"
            >
              Innovation in every move
            </motion.p>
          </div>
          <div className="absolute top-[30%] left-[50%] translate-x-[-50%] h-[100vh]">
            <motion.p
              style={{ x: xSecond }}
              className="relative text-5xl [text-shadow:4px_4px_8px_black]"
            >
              Engineered to excel
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
