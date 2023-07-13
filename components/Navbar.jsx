import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { motion } from "framer-motion";

const NavLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <NavLink href="/" title="Home" className="mr-4" />
        <NavLink href="/about" title="About" className="mx-4" />
        <NavLink href="/projects" title="Projects" className="mx-4" />
        <NavLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex flex-wrap items-center justify-center gap-6 text-xl">
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsLinkedin />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsGithub />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsTwitter />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsInstagram />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebookMessenger />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
