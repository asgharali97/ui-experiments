import gsap from "gsap";
import { useRef } from "react";
import { FastAverageColor } from "fast-average-color";

const videos = [
  {
    id: 1,
    title: "Shadcn Just Dropped Game-Changing Components | Update 2025",
    channel: "Manu Arora",
    views: "1M views",
    time: "10 days ago",
    duration: "19:23",
    thumbnail:
      "https://i9.ytimg.com/vi/c1B0uDAlc7c/hqdefault_custom_3.jpg?sqp=CIif3scG-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAZgEgcFIX8WGYDjxCMM757ucqMUA",
    avatar:
      "https://yt3.googleusercontent.com/n7G_or_yexSPKjDYTVLw59w0B7DUTWT3mGln3ghAoGQvFCwkd1lxeQTbCE_hV2q7ASJC3PU3dw=s160-c-k-c0x00ffffff-no-rj",
  },
   {
    id: 2,
    title: "Building Workflows with Motia",
    channel: "Piyush Garg",
    views: "2M views",
    time: "2 days ago",
    duration: "10:51",
    thumbnail:
      "https://i.ytimg.com/vi/f9JdhJlod0A/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5V-kFvnmACcLTv6Eewr5kUjH8CA",
    avatar:
      "https://yt3.googleusercontent.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    title: "The Secret Sauce Behind Modern AI Projects | AI SDK Library",
    channel: "Chai aur Code",
    views: "2.8M views",
    time: "13 days ago",
    duration: "8:40",
    thumbnail:
      "https://i.ytimg.com/vi/DDg6NtD1SsQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCrADQVhSL7UA1d-2QTTbk_cOypiw",
    avatar:
      "https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj",
  },
 
];


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