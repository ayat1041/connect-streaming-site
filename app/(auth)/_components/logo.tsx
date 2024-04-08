"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0.0 }}
      animate={{ scale: 1.0 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-y-[2px]"
    >
      <div className="p-1">
      <svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="50.00"
  height="50.00"
  viewBox="0 0 2048.0 2048.0"
>
  <g id="document" transform="matrix(1,0,0,1,1024.0,1024.0)">
    <path
      d="M -735.015 18.2416 C -735.015 424.846 -406.604 753.257 -2 1070 C 403.477 753.257 731.888 424.846 735.016 21.3693 Q 653 -634 0 -735 Q -653 -634 -735.015 18.2416 Z"
      fill="gray"
      fill-opacity=".30"
    />
    <motion.path
      initial={{ scale: 1.0 }}
      animate={{ scale: [1.0, 1.2, 0.5, 1.2] }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      d="M-200,-300 C-135.5,-300 -82.5,-247.5 -83,-183 L-83,-20 C-83,45 -136,97.5 -200,97.5 C-264,97.5 -317,-45 -317,-183 L-317,-183 C-317,-247.5 -264.5,-300 -200,-300 Z"
      fill="white"
      fill-opacity=".80"
    />
    <path
      d="M200,-300 C135.5,-300 82.5,-247.5 83,-183 L83,-20 C83,45 136,97.5 200,97.5 C264,97.5 317,-45 317,-183 L317,-183 C317,-247.5 264.5,-300 200,-300 Z"
      fill="white"
      fill-opacity=".80"
    />
  </g>
</svg>

      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">
          Co
          <span className="text-2xl text-blue-300">nn</span>
          ect
          <span>.</span>
        </p>
        <p className="text-sm text-muted-foreground">Stream with ease.</p>
      </div>
    </motion.div>
  );
};
