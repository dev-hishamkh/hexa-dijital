"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Center, Environment, Float } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";

const basePath =
  process.env.NODE_ENV === "production" ? "/hexa-dijital-final" : "";
const LOGO_PATH = `${basePath}/logo.svg`;

const SvgModel = () => {
  const svg = useLoader(SVGLoader, LOGO_PATH);
  const groupRef = useRef();

  const pathData = useMemo(() => {
    if (!svg || !svg.paths) return [];
    return svg.paths.map((path) => ({
      shapes: path.toShapes(true),
      color: path.color,
    }));
  }, [svg]);

  // O ilk fotoğraftaki mükemmel pah ve derinlik ayarları
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
                {/* O İLK GÖRSELDEKİ MUHTEŞEM MALZEME */}
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

export default function Logo3D() {
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
      <Canvas camera={{ position: [0, 0, 120], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight
          position={[-10, -10, -10]}
          intensity={1}
          color="#00FFD1"
        />

        {/* O İLK FOTOĞRAFTAKİ KUSURSUZ YANSIYI VEREN STÜDYO ORTAMI */}
        <Environment preset="studio" />

        <Float speed={2} rotationIntensity={0.1} floatIntensity={1.2}>
          <SvgModel />
        </Float>
      </Canvas>
    </div>
  );
}
