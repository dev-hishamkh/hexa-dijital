"use client";

import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";
import styles from "./LightRays.module.css";

const DEFAULT_COLOR = "#00FFD1";

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255,
      ]
    : [0, 1, 0.82];
};

const getAnchorAndDir = (origin, w, h) => {
  const outside = 0.2;
  switch (origin) {
    case "top-left":
      return { anchor: [0, -outside * h], dir: [0, 1] };
    case "top-right":
      return { anchor: [w, -outside * h], dir: [0, 1] };
    case "left":
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case "right":
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case "bottom-left":
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case "bottom-center":
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case "bottom-right":
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default:
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

export default function LightRays({
  raysOrigin = "top-right",
  raysColor = DEFAULT_COLOR,
  raysSpeed = 0.9,
  lightSpread = 1.6 /* Işıklar daha geniş yayılsın */,
  rayLength = 2.4 /* Işıklar ekranın dibine kadar uzansın */,
  pulsating = false,
  fadeDistance = 1.2,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.06,
  noiseAmount = 0.02,
  distortion = 0.01,
  lightMode = false,
}) {
  const containerRef = useRef(null);
  const uniformsRef = useRef(null);
  const rendererRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationIdRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    let gl;

    try {
      const safeDpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer = new Renderer({
        dpr: safeDpr,
        alpha: true,
        powerPreference: "high-performance",
      });
      rendererRef.current = renderer;
      gl = renderer.gl;
      gl.canvas.style.width = "100%";
      gl.canvas.style.height = "100%";

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(gl.canvas);
    } catch (e) {
      console.warn("LightRays OGL Başlatılamadı:", e);
      return;
    }

    const vert = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    /* 
      PARLAKLIĞI VE DOYGUNLUĞU ARTIRILMIŞ SHADER KODU
    */
    const frag = `
      precision mediump float;

      uniform float iTime;
      uniform vec2  iResolution;
      uniform vec2  rayPos;
      uniform vec2  rayDir;
      uniform vec3  raysColor;
      uniform float raysSpeed;
      uniform float lightSpread;
      uniform float rayLength;
      uniform float pulsating;
      uniform float fadeDistance;
      uniform float saturation;
      uniform vec2  mousePos;
      uniform float mouseInfluence;
      uniform float noiseAmount;
      uniform float distortion;
      uniform float lightMode;

      varying vec2 vUv;

      float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
        vec2 sourceToCoord = coord - raySource;
        vec2 dirNorm = normalize(sourceToCoord);
        float cosAngle = dot(dirNorm, rayRefDirection);

        float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
        float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

        float distance = length(sourceToCoord);
        float maxDistance = iResolution.x * rayLength;
        float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
        float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
        float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

        float baseStrength = clamp(
          (0.55 + 0.20 * sin(distortedAngle * seedA + iTime * speed)) +
          (0.40 + 0.25 * cos(-distortedAngle * seedB + iTime * speed)),
          0.0, 1.0
        );

        return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
      }

      void main() {
        vec2 coord = vec2(gl_FragCoord.x, iResolution.y - gl_FragCoord.y);
        vec2 finalRayDir = rayDir;

        if (mouseInfluence > 0.0) {
          vec2 mouseScreenPos = mousePos * iResolution.xy;
          vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
          finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
        }

        /* Işık yoğunlukları 1.5 katına çıkarıldı (Parlak neon hissi) */
        vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.22, 21.11, 1.5 * raysSpeed);
        vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.39, 18.02, 1.1 * raysSpeed);

        vec4 fragColor = rays1 * 0.75 + rays2 * 0.65;

        if (noiseAmount > 0.0) {
          float n = noise(coord * 0.01 + iTime * 0.1);
          fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
        }

        float brightness = 1.0 - (coord.y / iResolution.y);
        fragColor.x *= 0.2 + brightness * 0.9;
        fragColor.y *= 0.4 + brightness * 0.8;
        fragColor.z *= 0.6 + brightness * 0.7;

        if (saturation != 1.0) {
          float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
          fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
        }

        /* Renk parlaklığı 1.4 ile çarpılarak sahnede patlatıldı */
        fragColor.rgb *= (raysColor * 1.45);

        if (lightMode > 0.5) {
          vec3 mapped = vec3(1.0) - exp(-max(fragColor.rgb, vec3(0.0)) * 1.35);
          float energy = clamp(max(mapped.r, max(mapped.g, mapped.b)), 0.0, 1.0);
          vec3 hue = mapped / max(energy, 0.0001);
          vec3 ink = mix(hue * 0.25, hue * 0.72, energy);
          fragColor = vec4(mix(vec3(1.0), ink, energy), 1.0);
        }

        gl_FragColor = fragColor;
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      rayPos: { value: [0, 0] },
      rayDir: { value: [0, 1] },
      raysColor: { value: hexToRgb(raysColor) },
      raysSpeed: { value: raysSpeed },
      lightSpread: { value: lightSpread },
      rayLength: { value: rayLength },
      pulsating: { value: pulsating ? 1.0 : 0.0 },
      fadeDistance: { value: fadeDistance },
      saturation: { value: saturation },
      mousePos: { value: [0.5, 0.5] },
      mouseInfluence: { value: mouseInfluence },
      noiseAmount: { value: noiseAmount },
      distortion: { value: distortion },
      lightMode: { value: lightMode ? 1.0 : 0.0 },
    };
    uniformsRef.current = uniforms;

    const geometry = new Triangle(gl);
    const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
    const mesh = new Mesh(gl, { geometry, program });

    const updatePlacement = () => {
      if (!container || !renderer) return;
      const wCSS = container.clientWidth || window.innerWidth;
      const hCSS = container.clientHeight || window.innerHeight;
      renderer.setSize(wCSS, hCSS);

      const dpr = renderer.dpr;
      const w = wCSS * dpr;
      const h = hCSS * dpr;

      uniforms.iResolution.value = [w, h];
      const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
      uniforms.rayPos.value = anchor;
      uniforms.rayDir.value = dir;
    };

    updatePlacement();
    window.addEventListener("resize", updatePlacement);

    const loop = (t) => {
      if (!renderer || !uniformsRef.current) return;
      uniformsRef.current.iTime.value = t * 0.001;

      if (followMouse && mouseInfluence > 0.0) {
        smoothMouseRef.current.x +=
          (mouseRef.current.x - smoothMouseRef.current.x) * 0.08;
        smoothMouseRef.current.y +=
          (mouseRef.current.y - smoothMouseRef.current.y) * 0.08;
        uniformsRef.current.mousePos.value = [
          smoothMouseRef.current.x,
          smoothMouseRef.current.y,
        ];
      }

      try {
        renderer.render({ scene: mesh });
        animationIdRef.current = requestAnimationFrame(loop);
      } catch (err) {
        console.warn("OGL render hatası:", err);
      }
    };

    animationIdRef.current = requestAnimationFrame(loop);

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
    };

    if (followMouse) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", updatePlacement);
      if (followMouse)
        window.removeEventListener("pointermove", handlePointerMove);
      if (gl?.canvas?.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, [
    raysOrigin,
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    followMouse,
    mouseInfluence,
    noiseAmount,
    distortion,
    lightMode,
  ]);

  return <div ref={containerRef} className={styles.container} />;
}
