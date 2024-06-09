"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/utils/card";

const CardPricing = () => {
  const standard = [
    {
      price1: "Rp. 70.000",
      price2: "Rp. 90.000",
      price3: "Rp. 200.000",
      price4: "Rp. 250.000",
    },
    {
      pro: (
        <ul className=" py-7 text-xs text-start ">
          <li className="text-xs py-3">Digital Distribution, rilis ke semua Music Platforms.</li>
          <li className="text-xs py-3">© 100% Copyright, Holder pemegang hakcipta.</li>
          <li className="text-xs py-3">75% Artist Revenue, Penghasilan Artist.</li>
          <li className="text-xs py-3">Non-Exclusive, bentuk kerjasama tidak mengikat.</li>
          <li className="text-xs py-3">One-time fee, tarif per rilis untuk seterusnya.</li>
          <li className="text-xs py-3">No Annual fees,gratis tanpa biaya tahunan .</li>
          <li className="text-xs py-3">Youtube Claim & Monetize, melindungi dan memonetisasi karya musik di YouTube .</li>
          <li className="text-xs py-3">Channels Exclude ,pengecualian Youtube Channels dari copyright claim.</li>
        </ul>
      ),
      pro2: (
        <ul className=" py-7 text-xs text-start ">
          <li className="text-xs py-3">Digital Distribution, rilis ke semua Music Platforms.</li>
          <li className="text-xs py-3">© 100% Copyright, Holder pemegang hakcipta.</li>
          <li className="text-xs py-3">75% Artist Revenue, Penghasilan Artist.</li>
          <li className="text-xs py-3">Non-Exclusive, bentuk kerjasama tidak mengikat.</li>
          <li className="text-xs py-3">One-time fee, tarif per rilis untuk seterusnya.</li>
          <li className="text-xs py-3">No Annual fees,gratis tanpa biaya tahunan .</li>
          <li className="text-xs py-3">Youtube Claim & Monetize, melindungi dan memonetisasi karya musik di YouTube .</li>
          <li className="text-xs py-3">Channels Exclude ,pengecualian Youtube Channels dari copyright claim.</li>
          <li className="text-xs py-3">Custom ℗ Record pemegang hak distribusi audio.</li>
          <li className="text-xs py-3">Song Preview Start Penentuan start lagu.</li>
          <li className="text-xs py-3">Release Date Penentuan tanggal rilis.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-2  mx-auto xl:mx- gap-9  pb-10 ">
      <div className=" text-center ">
        <BackgroundGradient className="rounded-[22px]  relative p-4 sm:p-10 bg-zinc-900">
          <div className="text-center   ">
            <h1 className=" sm:text-xl text-neutral-200 font-abc">Single</h1>
            <p className="text-sm text-neutral-400">Standard</p>
          </div>

          <div className="text-start justify-center px-3 text-sm md:text-md text-neutral-200 font-abc">
            {standard.map((item, index) => (
              <div key={index}>{item.pro}</div>
            ))}
            <div className="md:pt-[7.5rem] ">
              <h1 className=" sm:text-xl text-neutral-200 font-abc">{standard[0].price1}</h1>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <div className=" ">
        <BackgroundGradient className="rounded-[22px] relative p-4 gap-3 sm:p-10 bg-zinc-900 ">
          <div className="text-center">
            <h1 className=" sm:text-xl text-neutral-200 font-abc">Single</h1>
            <p className="text-sm text-neutral-400">Pro + Additional Features</p>
          </div>
          <div className="text-start justify-center px-3 text-sm md:text-md text-neutral-200 font-abc">
            {standard.map((item, index) => (
              <div key={index}>{item.pro2}</div>
            ))}
            <h1 className=" sm:text-xl text-neutral-200 font-abc">{standard[0].price2}</h1>
          </div>
        </BackgroundGradient>
      </div>
      <div className=" ">
        <BackgroundGradient className="rounded-[22px] relative p-4 gap-3 sm:p-10 bg-zinc-900 ">
          <div className="text-center">
            <h1 className=" sm:text-xl text-neutral-200 font-abc">Album</h1>
            <p className="text-sm text-neutral-400">Standard</p>
          </div>
          <div className="text-start justify-center px-3 text-sm md:text-md text-neutral-200 font-abc">
            {standard.map((item, index) => (
              <div key={index}>{item.pro}</div>
            ))}
            <div className="md:pt-[7.5rem]">
              <h1 className=" sm:text-xl text-neutral-200 font-abc">{standard[0].price3}</h1>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <div className="">
        <BackgroundGradient className="rounded-[22px] relative p-4 gap-3 sm:p-10 bg-zinc-900 ">
          <div className="text-center">
            <h1 className=" sm:text-xl text-neutral-200 font-abc">Album</h1>
            <p className="text-sm text-neutral-400">Pro + Additional Features</p>
            <div className="text-start justify-center px-3 text-sm md:text-md text-neutral-200 font-abc">
              {standard.map((item, index) => (
                <div key={index}>{item.pro2}</div>
              ))}

              <h1 className=" sm:text-xl text-neutral-200 font-abc">{standard[0].price4}</h1>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default CardPricing;
