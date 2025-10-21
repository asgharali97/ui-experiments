import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { useRef } from "react";
import { FastAverageColor } from "fast-average-color";
import { videos } from "./data/videos";


const App = () => {
  const cardsRef = useRef([]);
  const fac = new FastAverageColor();
  const defaultTint = "rgba(255,255,255,0.2)"; 

  const handleHover = (index, imgUrl, enter) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const bg = card.querySelector(".hover-bg");
    bg.style.transformOrigin = "center center";
    bg.style.transition = "none";
    bg.style.willChange = "opacity, transform";
    bg.style.borderRadius = "inherit";
    gsap.killTweensOf(bg);

    if (enter) {
      gsap.set(bg, {
        scale: 0.55,
        opacity: 0,
        backgroundColor: defaultTint,
      });

      const tl = gsap.timeline({ overwrite: true });
      tl.to(
        bg,
        {
          scale: 0.9,
          duration: 0.30,
          ease: "bounce.out",
        }
      );
      tl.to(
        bg,
        {
          scale: 1.05,
          duration: 0.20,
          ease: "power2.out",
        },
        "-=0.08"
      );
      tl.to(
        bg,
        {
          opacity: 0.95,
          duration: 0.30,
          ease: "power1.out",
        },
        "-=0.18"
      );
      fac
        .getColorAsync(imgUrl)
        .then((color) => {
          gsap.to(bg, {
            backgroundColor: color.hex,
            duration: 0.25,
            ease: "bounce.out",
          });
        })
        .catch(() => {
         
        });
    } else {
      const tl = gsap.timeline({
        overwrite: true,
        onComplete: () => {
          bg.style.willChange = "auto";
        },
      });

      tl.to(bg, {
        opacity: 0.85,
        duration: 0.12,
        ease: "bounce.in",
      });
      tl.to(
        bg,
        {
          opacity: 0.6,
          scale: 0.9,
          duration: 0.18,
          ease: "bounce.in",
        },
        "-=0.02"
      );
      tl.to(
        bg,
        {
          opacity: 0,
          duration: 0.12,
        },
        "-=0.12"
      );
    }
  };

  return (
    <div className="w-full min-h-screen py-12 px-8 bg-[var(--background)] text-[var(--foreground)] grid grid-cols-3 gap-6">
      {videos.map((video, i) => (
        <div
          key={video.id}
          ref={(el) => (cardsRef.current[i] = el)}
          className="h-88 relative overflow-hidden rounded-xl cursor-pointer group"
          onMouseEnter={() => handleHover(i, video.thumbnail, true)}
          onMouseLeave={() => handleHover(i, video.thumbnail, false)}
        >
          <div className="hover-bg absolute inset-0 rounded-xl z-0"></div>

          <div className="relative z-10 p-3">
            <img
              className="rounded-md w-full"
              src={video.thumbnail}
              alt={video.title}
            />
            <div className="content flex text-white mt-3">
              <img
                className="rounded-full h-10 w-10 mr-3"
                src={video.avatar}
                alt={video.channel}
              />
              <div>
                <h3 className="text-lg font-medium leading-snug">
                  {video.title}
                </h3>
                <h4 className="font-normal">{video.channel}</h4>
                <div className="flex gap-4 items-center text-gray-300">
                  <h4>{video.views}</h4> <h4>{video.uploaded}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;