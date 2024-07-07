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
      duration: 5,
      x: 0,
      y: 0,
      z: 10,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
      cameraLoads();
  }, []);

  const { nodes, materials } = useGLTF('./ball.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
        >
            <meshBasicMaterial />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./ball.gltf')