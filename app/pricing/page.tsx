"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/utils/tracing";
import { FaArrowLeft } from "react-icons/fa";

import { CsButton } from "../components/ui/csbutton";
import CardPricing from "./card";

import FooterPricing from "./footerPricing";

export default function Pricing() {
  return (
    <div className="min-h-full  rounded-md bg-neutral-950 relative flex flex-col antialiased " data-aos="fade-up">
      <div className="relative pt-5 ps-5">
        <CsButton text={<FaArrowLeft className="text-white text-xl md:text-3xl" />} href="/" />
      </div>
      <div className="md:max-w-2xl mx-auto p-20">
        <h1 className="relative z-10 text-3xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  items-center font-abc font-bold uppercase">musiver</h1>

        <p className=" text-sm max-w-5xl mt-2 text-neutral-300 font-abc">
          Rilis musik secara online dengan menjual dan memperdengarkan lagu melalui iTunes, Spotify, Apple Music, Youtube Music, Deezer, Amazon dan platform digital music worldwide lainnya.
        </p>
      </div>
      <CardPricing />
      <FooterPricing />
      <BackgroundBeams />
    </div>
  );
}
