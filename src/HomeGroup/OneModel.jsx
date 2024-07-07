import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function OneModel({ colorIndex, rotate, setRotate }) {
  const { camera } = useThree();
  const tl = gsap.timeline();
  let mm = gsap.matchMedia();
  const model = useRef()

  const cameraLoads = () => {
    gsap.to(camera.position, {
      duration: 3,
      x: -7,
      y: 15,
      z: 13,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
    cameraLoads();
  }, []);

  const isMobile = window.innerWidth <= 768;
  const { nodes, materials } = useGLTF('./cpu2.glb');

  const colors = ["#fefeff", "#FFEB8C", "#D1A578", "#888888"];

  useEffect(() => {
    if (rotate) {
      gsap.to(model.current.rotation, {
        y: model.current.rotation.y + Math.PI * 1,
        duration: 2,
        onComplete: () => setRotate(false),
      });
    }
  }, [rotate, setRotate]);

  return (
    <group position={[0, 0, 0]} scale={isMobile ? 1.5 : 1} dispose={null} ref={model} >
      <mesh geometry={nodes.Object_4.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.1} color={colors[colorIndex]} />
      </mesh>
      <mesh geometry={nodes.Object_6.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={colors[colorIndex]} />
      </mesh>
      <mesh geometry={nodes.Object_8.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.1} color={colors[colorIndex]} />
      </mesh>
      <mesh geometry={nodes.Object_10.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={colors[colorIndex]}  />
      </mesh>
      <mesh geometry={nodes.Object_12.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={colors[colorIndex]} />
      </mesh>
      <mesh geometry={nodes.Object_14.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={colors[colorIndex]} />
      </mesh>
    </group>
  );
}

useGLTF.preload('./cpu2.glb');
