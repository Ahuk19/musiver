// accernitiy

import { FloatingNav } from "../components/ui/floatingnav";
import { Spotlight } from "../components/utils/spotlight";

import { Metadata } from "next";

import MainComponent from "./main";

export const metadata: Metadata = {
  title: "List Digital Stote",
  description: "Musiver List Digital Stote | List Digital Stote | Music Aggregator | Music Publishing | Copyrights Service | Promotion Tools",
};

const Store = () => {
  return (
    <div className="h-full w-full  rounded-md grid md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <FloatingNav navItems={[{ name: "Home", link: "/" }]} />

      <MainComponent />
    </div>
  );
};

export default Store;
