import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";

export default function SeltzersModel({ rotate, setRotate, props }) {
  const { nodes, materials } = useGLTF('/seltzers.glb')
  const meshRef = useRef()
  const { camera } = useThree();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.005 // Adjust the value to control the speed of rotation
//     }
//   })

  useEffect(() => {
    if (rotate) {
      gsap.to(meshRef.current.rotation, {
        y: meshRef.current.rotation.y + Math.PI * 2,
        duration: 2,
        onComplete: () => setRotate(false),
      });
    }
  }, [rotate, setRotate]);

  const cameraLoads = () => {
    gsap.to(camera.position, {
      duration: 3,
      x: 0,
      y: 0,
      z: 7.5,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
    cameraLoads();
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} castShadow receiveShadow geometry={nodes.can.geometry} material={materials.can} />
    </group>
  )
}

useGLTF.preload('/seltzers.glb')
