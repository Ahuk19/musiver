"use client";
import React from "react";
import { PinContainer } from "@/app/components/utils/3d-pin";
import Aos from "aos";
import "aos/dist/aos.css";
// public asset
import Amazon from "@/public/amazon-removebg-preview.png";
import Spotify from "@/public/spotify-removebg-preview.png";
import Joox from "@/public/joox-removebg-preview.png";
import Itunes from "@/public/itunes-removebg-preview.png";
import Tiktok from "@/public/tiktok-removebg-preview.png";
import Youtube from "@/public/youtube-removebg-preview.png";
import Radio from "@/public/iHeartRadio-Logo-2008-removebg-preview.png";
import Tidal from "@/public/11-removebg-preview.png";
// next
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CsButton } from "./csbutton";

export default function StorePage() {
  useEffect(() => {
    Aos.init();
  }, []);

  type CardType = {
    title: string;
    href: string;
    label: string;
    Image: any;
  };

  const Card: CardType[] = [
    {
      title: "Amazon Mp3",
      href: "https://www.amazon.com",
      label: "Amazon Mp3",
      Image: Amazon,
    },
    {
      title: "Spotify",
      href: "https://www.spotify.com",
      label: "Spotify",
      Image: Spotify,
    },
    {
      title: "Joox",
      href: "https://www.joox.com",
      label: "Joox",
      Image: Joox,
    },
    {
      title: "iTunes",
      href: "https://www.itunes.com",
      label: "iTunes",
      Image: Itunes,
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com",
      label: "TikTok",
      Image: Tiktok,
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com",
      label: "Youtube",
      Image: Youtube,
    },
    {
      title: "iHeartRadio",
      href: "https://www.iHeartRadio.com",
      label: "iHeartRadio",
      Image: Radio,
    },
    {
      title: "Tidal",
      href: "https://www.tidal.com",
      label: "Tidal",
      Image: Tidal,
    },
  ];

  return (
    <div className="justify-center items-center mb-10 text-center" data-aos="fade-up-right" data-aos-duration="1500">
      <div className="text-center items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:pt-10 pb-16">
        {Card.map((card) => (
          <PinContainer title={card.label} href={card.href} key={card.label}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]  ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold font-abc text-base text-slate-100">{card.title}</h3>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-500">
                <Link href={card.href}>
                  <Image src={card.Image} alt="Amazon" className="w-full h-[200px] rounded-lg border-slate-600 pt-4" />
                </Link>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
      <CsButton text="See more" href="/store" />
    </div>
  );
}
