import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'

export function Sphere(props) {
  const { nodes, materials } = useGLTF('/spheremodel.gltf')

  const sphereRef = useRef()
  const tl = gsap.timeline()
  let mm  = gsap.matchMedia();

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl

      .to(sphereRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        scrollTrigger: {
          trigger: ".eight",
          start: "top bottom",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
          markers: true
        },
      })

    })
    
  }, [])

  return (
    <group ref={sphereRef} {...props} scale={0} dispose={null}>
      <group scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
        >
            <meshNormalMaterial />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/spheremodel.gltf')