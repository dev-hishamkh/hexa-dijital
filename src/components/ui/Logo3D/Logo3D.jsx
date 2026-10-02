"use client";

import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Center, Environment, Float } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";

const SvgModel = ({ url = "/logo.svg" }) => {
  const svg = useLoader(SVGLoader, url);
  const groupRef = useRef();

  const pathData = useMemo(() => {
    if (!svg || !svg.paths) return [];
    return svg.paths.map((path) => ({
      shapes: path.toShapes(true),
      color: path.color,
    }));
  }, [svg]);

  const extrudeSettings = useMemo(
    () => ({
      depth: 10,
      bevelEnabled: true,
      bevelThickness: 1.5,
      bevelSize: 1,
      bevelSegments: 4,
      curveSegments: 12,
    }),
    [],
  );

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = -(state.mouse.y * 12 * Math.PI) / 90;
      const targetY = (state.mouse.x * 12 * Math.PI) / 90;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.05,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.05,
      );
    }
  });

  if (!pathData.length) return null;

  return (
    <group ref={groupRef}>
      <Center>
        <group scale={[0.42, -0.42, 0.42]}>
          {pathData.map((data, index) =>
            data.shapes.map((shape, i) => (
              <mesh key={`${index}-${i}`}>
                <extrudeGeometry args={[shape, extrudeSettings]} />
                <meshStandardMaterial
                  color={data.color || "#00FFD1"}
                  metalness={0.8}
                  roughness={0.3}
                  envMapIntensity={0.8}
                  toneMapped={false}
                />
              </mesh>
            )),
          )}
        </group>
      </Center>
    </group>
  );
};

export default function Logo3D({ logoUrl = "/logo.svg" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas camera={{ position: [0, 0, 120], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight
          position={[-10, -10, -10]}
          intensity={1}
          color="#00FFD1"
        />

        <Environment preset="studio" />

        <Float speed={2} rotationIntensity={0.1} floatIntensity={1.2}>
          {/* Hata fırlatmasını engelleyen ve asenkron yüklemeyi sağlayan kalkan */}
          <Suspense fallback={null}>
            <SvgModel url={logoUrl} />
          </Suspense>
        </Float>
      </Canvas>
    </div>
  );
}
