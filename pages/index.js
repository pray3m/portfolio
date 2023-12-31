import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RiShareBoxLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <main className=" flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src="/images/profile/profile.png"
                alt="prem"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              {/* <h2 className="text-2xl font-bold">Full Stack Developer</h2> */}
              <p className="my-4 text-base font-medium">
                I'm a creative full-stack developer based in Butwal,Nepal. I am
                dedicated and passionate about turning ideas into innovative web
                applications.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  transition-all duration-300"
                  download={true}
                >
                  Resume <RiShareBoxLine className="ml-2 text-2xl" />
                </Link>
                <Link
                  href="mailto:prem.gtm9@gmail.com"
                  target="_blank"
                  className="ml-5 text-xl font-medium  capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
