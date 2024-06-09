"use client";
// public asset
import Amazon from "@/public/amazon-removebg-preview.png";
import Spotify from "@/public/spotify-removebg-preview.png";
import Joox from "@/public/joox-removebg-preview.png";
import Itunes from "@/public/itunes-removebg-preview.png";
import Tiktok from "@/public/tiktok-removebg-preview.png";
import Youtube from "@/public/youtube-removebg-preview.png";
import Radio from "@/public/iHeartRadio-Logo-2008-removebg-preview.png";
import Tidal from "@/public/11-removebg-preview.png";
import Kuack from "@/public/kuack-logo-mobile-removebg-preview.png";
import Fb from "@/public/fb-removebg-preview.png";
import Ig from "@/public/ig-removebg-preview.png";
import Deezer from "@/public/deezer-removebg-preview.png";
import Napster from "@/public/napster-removebg-preview.png";
import Shazam from "@/public/shazam-removebg-preview.png";
import Digital from "@/public/7digital-removebg-preview.png";
import Boom from "@/public/Boomplay_Music_Logo-removebg-preview.png";
// aos
import Aos from "aos";
import "aos/dist/aos.css";
// component
import Footer from "../components/ui/footer";
import { PinContainer } from "../components/utils/3d-pin";
// next
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { CsButton } from "../components/ui/csbutton";
import { FaArrowLeft } from "react-icons/fa";

const MainComponent = () => {
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
    {
      title: "Kuack",
      href: "https://kuackmedia.com/",
      label: "Kuack Media",
      Image: Kuack,
    },
    {
      title: "Instagram",
      href: "https://instagram.com",
      label: "Instagram",
      Image: Ig,
    },
    {
      title: "Facebook",
      href: "https://facebook.com/",
      label: "Facebook",
      Image: Fb,
    },
    {
      title: "Deezer",
      href: "https://deezer.com/",
      label: "Deezer",
      Image: Deezer,
    },
    {
      title: "Napster",
      href: "https://napster.com/",
      label: "Napster",
      Image: Napster,
    },
    {
      title: "Shazam",
      href: "https://shazam.com/",
      label: "Shazam",
      Image: Shazam,
    },
    {
      title: "7 Digital",
      href: "https://7digital.com/",
      label: "7 Digital",
      Image: Digital,
    },
    {
      title: "Boom Play",
      href: "https://boomplay.com/",
      label: "Boom Play",
      Image: Boom,
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="relative pt-5 ps-5">
        <CsButton text={<FaArrowLeft className="text-white text-xl md:text-3xl" />} href="/" />
      </div>
      <h1 className="text-4xl md:text-7xl font-bold pt-32 pb-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">List Digital Store .</h1>
      <div className="container pt-10 items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 md:pt-10 pb-16">
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
        <div className="mx-auto text-center md:ms-52 justify-center pt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
