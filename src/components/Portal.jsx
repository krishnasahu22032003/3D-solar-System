// components/Portal.jsx
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

export default function Portal() {
  const sunRef = useRef();
  const texture = useTexture("/textures/sun.jpg");

  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.0008;
    }
  });

  // Reduced hover intensity for softer glow
  const { scale, emissiveIntensity } = useSpring({
    scale: hovered ? 1.6 : 1.5,
    emissiveIntensity: hovered ? 2.5 : 2,
    config: { tension: 120, friction: 14 },
  });

  return (
    <a.mesh
      ref={sunRef}
      scale={scale}
      position={[0, 0, -2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.2, 64, 64]} />
      <a.meshStandardMaterial
        map={texture}
        emissive="#ff8c00"
        emissiveMap={texture}
        emissiveIntensity={emissiveIntensity}
        roughness={0.4}
        metalness={0.3}
      />
    </a.mesh>
  );
}
