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
      className="flex flex-col items-center gap-y-1"
    >
      <div className="bg-white rounded-full p-1">
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
              d="M-735.015,18.2416 C-735.015,424.846 -406.604,753.257 6.83586e-05,753.257 C403.477,753.257 731.888,424.846 735.016,21.3693 C731.888,121.457 650.567,199.65 550.48,199.65 C450.393,199.65 365.944,118.329 365.944,15.1139 C365.944,-422.768 365.944,225.721 365.944,-202.777 C365.944,-506.167 118.854,-753.257 -184.536,-753.257 C-487.925,-753.257 -735.015,-506.167 -735.015,-202.777 L-735.015,18.2416 Z"
              fill="#000000"
              fill-opacity="1.00"
            />
            <motion.path
              initial={{ scale: 1.0 }}
              animate={{ scale: [1.0, 0.0, 1.0] }}
              transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
              d="M-117.015,-303.001 C-52.5386,-303.001 0.395774,-250.465 -0.00222982,-185.988 L-0.00222982,-22.0113 C-0.00222982,42.4651 -52.9366,95.0014 -117.015,95.0014 C-181.093,95.0014 -234.028,42.8631 -234.028,-22.0113 L-234.028,-185.988 C-234.028,-250.465 -181.491,-303.001 -117.015,-303.001 Z"
              fill="rgb(147, 197, 253)"
              fill-opacity="1.00"
            />
            <path
              d="M-460.035,-303.001 C-395.558,-303.001 -342.624,-250.465 -343.022,-185.988 L-343.022,-22.0113 C-343.022,42.4651 -395.956,95.0014 -460.035,95.0014 C-524.113,95.0014 -577.048,42.8631 -577.048,-22.0113 L-577.048,-185.988 C-577.048,-250.465 -524.511,-303.001 -460.035,-303.001 Z"
              fill="white"
              fill-opacity="1.00"
            />
          </g>
        </svg>
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">
          Co
          <span className="text-2xl text-blue-300">NN</span>
          ect
          <span>.</span>
        </p>
        <p className="text-sm text-muted-foreground">Stream with ease.</p>
      </div>
    </motion.div>
  );
};