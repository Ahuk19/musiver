"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/app/components/utils/cn";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { CsButton } from "./csbutton";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Service",
      link: "#service",
      icon: <MdOutlineMiscellaneousServices className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <FaUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <MdMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border  border-white/[0.2] rounded bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link key={`link=${idx}`} href={navItem.link} className={cn("relative text-gray-400 hover:text-white items-center flex space-x-1 font-abc border border-transparent  ")}>
            <span className="block  sm:hidden">{navItem.icon}</span>
            <span className="hidden  sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <CsButton text="get started" href="/pricing" />
      </motion.div>
    </AnimatePresence>
  );
};
