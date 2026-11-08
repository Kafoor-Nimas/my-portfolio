"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Html } from "@react-three/drei";

const ACCENT = "#00ff99";

// Tech labels that orbit the core. Edit freely.
const TECH = [
  "React",
  "Next.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "PostgreSQL",
];

const ORBIT_RADIUS = 2.6;

function Core() {
  const group = useRef();

  // Gentle parallax: the whole object leans toward the cursor
  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    group.current.rotation.y +=
      (x * 0.6 - group.current.rotation.y) * delta * 2;
    group.current.rotation.x +=
      (-y * 0.4 - group.current.rotation.x) * delta * 2;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* solid, wobbling core */}
        <mesh>
          <icosahedronGeometry args={[1.25, 12]} />
          <MeshDistortMaterial
            color="#16161c"
            emissive={ACCENT}
            emissiveIntensity={0.18}
            roughness={0.25}
            metalness={0.9}
            distort={0.38}
            speed={1.8}
          />
        </mesh>
        {/* wireframe shell */}
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial
            color={ACCENT}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>
      <Orbit />
    </group>
  );
}

function Orbit() {
  const ring = useRef();
  useFrame((_, delta) => {
    ring.current.rotation.y += delta * 0.35;
  });

  return (
    <group ref={ring} rotation={[0.35, 0, 0.15]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[ORBIT_RADIUS, 0.008, 8, 128]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.6} />
      </mesh>
      {TECH.map((label, i) => {
        const angle = (i / TECH.length) * Math.PI * 2;
        return (
          <Html
            key={label}
            position={[
              Math.cos(angle) * ORBIT_RADIUS,
              0,
              Math.sin(angle) * ORBIT_RADIUS,
            ]}
            center
            distanceFactor={7}
            zIndexRange={[10, 0]}
          >
            <span className="px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap border border-accent/50 bg-primary/70 text-accent backdrop-blur select-none">
              {label}
            </span>
          </Html>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    // Wider than tall, so labels at the left and right edges have room
    <div className="w-[360px] h-[340px] sm:w-[560px] sm:h-[460px] xl:w-[660px] xl:h-[540px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 4, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-4, -2, 2]} intensity={25} color={ACCENT} />
        <group scale={1.1}>
          <Core />
        </group>
        <Sparkles count={60} scale={8} size={2.5} speed={0.4} color={ACCENT} />
      </Canvas>
    </div>
  );
}
