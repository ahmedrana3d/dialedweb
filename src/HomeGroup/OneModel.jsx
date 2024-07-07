import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function OneModel(props) {

  const { camera } = useThree()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

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

  const { nodes, materials } = useGLTF('./cpu2.glb')
  return (
    <group position={ [ 0, 0, 0 ] } scale={ isMobile ? 1.5 : 1} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Chip} >
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={nodes.Object_6.geometry} material={materials.Chip2} >
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={nodes.Object_8.geometry} material={materials.Chip2} >
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={nodes.Object_10.geometry} material={materials.Chip2} >
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={nodes.Object_12.geometry} material={materials.Chip2} >
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={nodes.Object_14.geometry} material={materials.Chip2} >
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./cpu2.glb')