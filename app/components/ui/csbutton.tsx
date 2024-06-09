"use client";
import Link from "next/link";
import React from "react";

export const CsButton = ({ href, onClick, text }: { href: string; onClick?: () => void; text?: any }) => {
  return (
    <Link href={href} key={href}>
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded">
          <span className="absolute inset-0 rounded bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex tracking-normal items-center z-10 rounded bg-zinc-950  px-4 ring-1 ring-white/10 py-2 uppercase font-abc">
          <span>{text}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </Link>
  );
};
