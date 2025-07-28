import React, { useRef, useState } from "react";
import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const planets = [
  { name: "Mercury", position: [-6, 0, -4], texture: "/textures/mercury.jpg" },
  { name: "Venus", position: [-4, 2, -6], texture: "/textures/venus.jpg" },
  { name: "Earth", position: [-3, 1, -5], texture: "/textures/earth.jpg" },
  { name: "Mars", position: [1, 2, -9], texture: "/textures/mars.jpg" },
  { name: "Jupiter", position: [2, -1, -7], texture: "/textures/jupiter.jpg" },
  { name: "Saturn", position: [5, 1, -10], texture: "/textures/saturn.jpg" },
  { name: "Uranus", position: [-2, -2, -12], texture: "/textures/uranus.jpg" },
  { name: "Neptune", position: [3, 3, -14], texture: "/textures/neptune.jpg" },
];

export default function Planets() {
  return (
    <>
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.85}
          intensity={0.6}
        />
      </EffectComposer>
      {planets.map((planet, idx) => (
        <Planet key={idx} {...planet} idx={idx} />
      ))}
    </>
  );
}

function Planet({ name, position, texture, idx }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const colorMap = useTexture(texture);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.position.y =
        position[1] + Math.sin(clock.elapsedTime + idx) * 0.2;
    }
  });

  return (
    <group>
      {/* Orbit Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
        <ringGeometry args={[0.8, 0.82, 64]} />
        <meshBasicMaterial color="#ffffff22" transparent />
      </mesh>

      {/* Glowing Planet */}
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          emissive="#ffffff"
          emissiveIntensity={hovered ? 0.3 : 0.05}
        />
        {hovered && (
          <Html center distanceFactor={10}>
            <div className="px-4 py-2 text-white text-sm rounded-xl border border-white/20 backdrop-blur-sm shadow-[0_0_20px_#88C0D0] animate-[pulse_2s_infinite] bg-gradient-to-br from-white/10 to-white/5">
              🌌 {name}
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}
