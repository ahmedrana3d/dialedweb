import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function OneModel({ colorToggle }) {
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
  const color = colorToggle ? "#FFEB8C" : "#fefeff";

  useEffect(() => {
    const rotationAmount = colorToggle ? Math.PI * 0.5 : 0; // Adjust rotation amount as needed

    gsap.to(model.current.rotation, {
      y: rotationAmount,
      duration: 1,
      ease: 'power1.out',
    });
  }, [colorToggle]);

  return (
    <group position={[0, 0, 0]} scale={isMobile ? 1.5 : 1} dispose={null} ref={model} >
      <mesh geometry={nodes.Object_4.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.1} color={color} />
      </mesh>
      <mesh geometry={nodes.Object_6.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={color} />
      </mesh>
      <mesh geometry={nodes.Object_8.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.1} color={color} />
      </mesh>
      <mesh geometry={nodes.Object_10.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={color} />
      </mesh>
      <mesh geometry={nodes.Object_12.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={color} />
      </mesh>
      <mesh geometry={nodes.Object_14.geometry} >
        <meshStandardMaterial metalness={1} roughness={0.5} color={color} />
      </mesh>
    </group>
  );
}

useGLTF.preload('./cpu2.glb');
