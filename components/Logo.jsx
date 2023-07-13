import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 text-light flex items-center justify-center rounded-full text-2xl font-bold bg-red-200 p-2"
        whileHover={{ scale: 1.1 }}
      >
        <Image src="/logo.svg" alt="pg logo" width={64} height={64} priority />
      </MotionLink>
    </div>
  );
};

export default Logo;
