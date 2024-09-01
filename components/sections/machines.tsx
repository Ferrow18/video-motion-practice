"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Mock data for machines
const allMachines = [
  {
    id: 1,
    name: "Automated Conveyor System",
    description:
      "Advanced conveyor system for efficient transport and sorting in wood processing facilities.",
    image: "/homa.jpg",
  },
  {
    id: 2,
    name: "Industrial Control Panel",
    description:
      "Centralized control system for automated management of wood processing machinery.",
    image: "/homa2.jpg",
  },
  {
    id: 3,
    name: "High Pressure Machine",
    description:
      "Precision cutting equipment designed for high-speed, high-efficiency processing.",
    image: "/jason.jpg",
  },
];

export default function Machines() {
  return (
    <section className="bg-black text-white h-[100vh] flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Featured Machines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allMachines.map((machine, index) => (
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={machine.image}
                alt={machine.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{machine.name}</h3>
                <p className="text-gray-400">{machine.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
