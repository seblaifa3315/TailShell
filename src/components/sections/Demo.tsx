"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/constants";

export default function Demo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section id="demo" className="section-padding bg-foreground">
      <div className="content-container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-section text-white mb-4">
            See TailShell in Action
          </h2>
          <p className="text-body-large text-white/70 max-w-2xl mx-auto">
            Watch how TailShell provides instant protection in any situation.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
        >
          {/* Video */}
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              poster="/images/hero-poster.jpg"
              onEnded={handleVideoEnd}
              playsInline
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-foreground" />
                ) : (
                  <Play className="w-8 h-8 text-foreground ml-1" />
                )}
              </div>
            </button>

            {/* Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-small text-white/50 mt-6"
        >
          TailShell — Portable protection for every adventure
        </motion.p>
      </div>
    </section>
  );
}
