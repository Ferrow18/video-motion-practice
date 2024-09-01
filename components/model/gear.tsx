"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Gear({ radius, teeth, thickness, color, position, rotation }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.z += delta * 0.2 * (radius < 0.5 ? -1 : 1); // Rotate smaller gears in opposite direction
  });

  const shape = new THREE.Shape();
  const toothAngle = (Math.PI * 2) / teeth;
  const toothDepth = radius * 0.1;

  for (let i = 0; i < teeth; i++) {
    const angle = i * toothAngle;
    shape.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
    shape.lineTo(
      Math.cos(angle + toothAngle / 4) * (radius + toothDepth),
      Math.sin(angle + toothAngle / 4) * (radius + toothDepth)
    );
    shape.lineTo(
      Math.cos(angle + (toothAngle * 3) / 4) * (radius + toothDepth),
      Math.sin(angle + (toothAngle * 3) / 4) * (radius + toothDepth)
    );
  }
  shape.lineTo(radius, 0);

  const extrudeSettings = {
    steps: 1,
    depth: thickness,
    bevelEnabled: false,
  };

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function GearMechanism() {
  return (
    <group>
      <Gear
        radius={0.8}
        teeth={32}
        thickness={0.1}
        color="#FFD700"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      {/* <Gear
        radius={0.5}
        teeth={20}
        thickness={0.1}
        color="#DAA520"
        position={[1.3, 0, 0]}
        rotation={[0, 0, 0]}
      /> */}
      {/* <Gear
        radius={0.3}
        teeth={12}
        thickness={0.1}
        color="#FFA500"
        position={[0.6, -0.9, 0]}
        rotation={[0, 0, 0]}
      /> */}
    </group>
  );
}
