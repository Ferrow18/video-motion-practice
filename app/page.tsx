"use client";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import Machines from "@/components/sections/machines";
import { Video } from "@/components/sections/video";

import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Video />
      </main>
      <Machines />
      <Footer />
    </>
  );
}
