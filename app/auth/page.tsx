"use client";
import React from "react";
import { Label } from "@/app/components/utils/label";
import { Input } from "@/app/components/utils/input";
import { cn } from "@/app/components/utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { CsButton } from "../components/ui/csbutton";
import { FaArrowLeft } from "react-icons/fa";

const Auth = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="mt-10" data-aos="fade-up">
      <div className="relative pb-8 ps-5">
        <CsButton text={<FaArrowLeft className="text-white text-xl md:text-3xl" />} href="/" />
      </div>
      <div className="max-w-md w-full mx-auto rounded md:rounded-2xl p-4 md:p-8 shadow-input border border-slate-600 bg-black font-abc">
        <h2 className="font-bold text-xl text-neutral-200">Welcome to Musiver</h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">Login to Dashboard</p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="yourmail@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn  to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign In &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="submit">
              <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
              <span className="text-neutral-300 text-sm">Google</span>
              <BottomGradient />
            </button>
          </div>
        </form>
        <Link href="/">
          <p className="text-sm text-neutral-300 font-abc underline">Don&apos;t have an account?</p>
        </Link>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default Auth;
