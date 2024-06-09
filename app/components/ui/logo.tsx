"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/components/utils/cn";
import { CsButton } from "./csbutton";
import { FaHeadset } from "react-icons/fa6";
import { GiPlayButton } from "react-icons/gi";
import { BsMusicNoteList } from "react-icons/bs";
import { HoverBorderGradientDemo } from "./border";

export function HeroComponent() {
  return (
    <>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -40 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="md:-mt-72  -mt-32 bg-gradient-to-br from-slate-300 to-white scroll-py-16 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <h1 className="font-abc ">Musiver</h1>
          <div className="container">
            <p className="font-abc text-xs md:text-xl md:pt-10 text-start">
              Musiver adalah salah satu perusahaan musik digital pertama di Indonesia yang memberikan layanan self servis di dalam satu aplikasi website, dimana band atau musisi yang ingin merilis karyanya bisa melakukanya sendiri dengan
              mudah dalam waktu kurang dari 5 menit. Musiver membantu musisi untuk merilis karyanya di seluruh dunia dengan jalur store digital seperti Itunes, Spotify, Youtube Art Track, Deezer, Google Play, dll, dan juga pengaktivan RBT
              untuk pengguna selular di Indonesia. Musiver juga memberikan layanan promosi seperti penayangan iklan di Facebook, Instagram dan youtube.
            </p>
            <div className="flex justify-center gap-3 pt-5 md:pt-16">
              <CsButton text="Sign in" href="/auth" />

              <CsButton text="get started" href="/pricing" />
            </div>
          </div>
        </motion.div>
        <div className="flex justify-between gap-y-10 md:gap-x-40 gap-x-14 text-xs md:text-xl uppercase font-abc mx-auto md:mt-20 md:mb-5">
          <HoverBorderGradientDemo icons={<GiPlayButton />} label="Music Distribution" />
          <HoverBorderGradientDemo icons={<FaHeadset />} label="Promotion tools" />
          <HoverBorderGradientDemo icons={<BsMusicNoteList />} label="Music Publishing" />
        </div>
        <div className="absolute -bottom-20 md:-bottom-32 ">
          <CsButton text="learn more" href="/" />
        </div>
      </LampContainer>
    </>
  );
}

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0", className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100px] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[6rem] rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 md:w-[30rem] w-5 -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex md:-translate-y-6 -translate-y-36 flex-col items-center px-5 ">{children}</div>
    </div>
  );
};
