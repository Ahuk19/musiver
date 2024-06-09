"use client";
import { cn } from "@/app/components/utils/cn";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { useState } from "react";

export function CardComponent() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="service" className=" pt-20 ">
      <div className="container">
        <h1 className="text-white text-center md:pb-20 font-abc md:text-5xl text-2xl" data-aos="fade-up" data-aos-duration="1000">
          Service
        </h1>

        <div className="max-w-5xl mx-auto px-8 " data-aos="fade-up" data-aos-duration="1000">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Distribution",
    description: "Sebagai Aggregator kami mendistribusikan karya lagu kalian ke seluruh toko musik digital seluruh dunia seperti iTunes, Spotify, Joox, Deezer, dll.",
  },
  {
    title: "Musiver Publishing",
    description: "Kami mengumpulkan royalti dari artis yang meng-cover lagu kalian, youtube, facebook, tv, radio, hotel, cafe, restoran bahkan dari film atau iklan yang memakai lagu kalian.",
  },
  {
    title: "Copyrights Service",
    description: "Kami Memonetisasi lagu kalian yang beredar diseluruh content di YOUTUBE, INSTAGRAM, FACEBOOK, dan TIKTOK. Kalian juga bisa mengecualikan claim hak cipta di channel sendiri.",
  },
  {
    title: "Promotion Tools",
    description:
      "Bagi yang ingin memiliki kualitas audio yang standart international, kami memiliki servis untuk produksi Mixing Mastering secara online. Kalian bisa nurut menyaksikan proses Mixing Mastering secara online via Zoom/Google Meet.",
  },
];

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div data-aos-duration="2000" className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 md:gap-7 mb-10", className)}>
      {items.map((item, idx) => (
        <Link href="/" className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)} key={idx}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card key={idx}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};
