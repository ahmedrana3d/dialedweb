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
          trigger: ".one",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(sphereRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".one",
          start: "top 60%",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(sphereRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        scrollTrigger: {
          trigger: ".eight",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(sphereRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".eight",
          start: "top 60%",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })

    })
    
  }, [])

  return (
    <group ref={sphereRef} position={ [ 5, -5, 0 ] } {...props} scale={0} dispose={null}>
      <group scale={0.0075}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
        >
            <meshStandardMaterial metalness={1} roughness={ 1 } color={ "#dcd7ff" }  />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/spheremodel.gltf')