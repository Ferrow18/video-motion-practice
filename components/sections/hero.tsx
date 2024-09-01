"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import picture from "@/public/pad.jpg";
import { Canvas } from "@react-three/fiber";
import GearMechanism from "../model/gear";
import { OrbitControls } from "@react-three/drei";

export const Hero = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 0.7, 0]);

  return (
    <div className="relative">
      <div
        ref={container}
        className="absolute -top-[67px] left-0 w-full h-[200vh]"
      >
        <Image
          src={picture}
          alt="hero"
          className="sticky top-0 w-full h-[100vh] object-cover scale-x-[-1]"
        />
      </div>
      <div className="container relative min-h-[calc(100vh-67px)] -top-10 mx-auto flex items-center">
        <motion.h1
          style={{ opacity }}
          className="text-7xl font-bold leading-tight"
        >
          Engineering the future <br /> of Machinery
        </motion.h1>
      </div>
      <div className="container relative h-[100vh] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "100% 0px -300px 0px" }}
          transition={{ duration: 1 }}
          className="text-3xl"
        >
          Discover our machines
        </motion.p>
      </div>
      <div className="absolute top-[700px] left-0 w-full h-[200vh]">
        <div className="sticky top-96">
          <Canvas
            camera={{ position: [0, 0, 3], fov: 50 }}
            onPointerDown={(event) => event.preventDefault()}
          >
            <ambientLight intensity={8} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <GearMechanism />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableRotate={true} // Keep rotation enabled
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};
