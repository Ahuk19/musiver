"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { BackgroundGradient } from "@/app/components/utils/card";
import Link from "next/link";

const ContactUS = () => {
  type ContactType = {
    name: string;
    href: string;
    icon: any;
  };

  const Contact: ContactType[] = [
    {
      name: "mcgregorgoal@gmail.com",
      href: "mcgregorgoal@gmail.com",
      icon: <MdEmail />,
    },
    {
      name: "+6285738812997",
      href: "https://wa.me/6285738812997",
      icon: <FaPhoneAlt />,
    },
    {
      name: "Badung, Bali, Indonesia",
      href: "https://google.com/maps/9XrTqY9VrYqTqHkW6",
      icon: <FaLocationArrow />,
    },
  ];

  return (
    <BackgroundGradient className="rounded-[22px] max-w-screen p-4 sm:p-10 bg-zinc-900 font-abc ">
      <div className="text-white text-center text-3xl uppercase">
        <h1>contact us</h1>
      </div>
      <div className="text-gray-300 py-5 flex flex-col gap-5">
        {Contact.map((items, index) => (
          <Link href={items.href} key={index}>
            <h1 className="flex gap-10 items-center justify-center text-xs ">
              {items.icon}
              {items.name}
            </h1>
          </Link>
        ))}
      </div>
    </BackgroundGradient>
  );
};

export default ContactUS;
