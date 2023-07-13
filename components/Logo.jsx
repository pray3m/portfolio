import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
        href="/"
        className="w-16  h-16 text-light flex items-center justify-center rounded-full text-2xl font-bold bg-black p-2"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
          filter: "brightness(1.2)",
        }}
      >
        <Image src="/logo.svg" alt="pg logo" width={64} height={64} priority />
      </MotionLink>
    </div>
  );
};

export default Logo;
