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
          trigger: ".four-content",
          start: "top center",
          end: "center center",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(sphereRef.current.position, {
        x: -7,
        y: -4,
        z: 0,
        scrollTrigger: {
          trigger: ".four-content",
          start: "top center",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

    })
    
  }, [])

  return (
    <group ref={sphereRef} position={ [ 5, 3, 0 ] } {...props} scale={0} dispose={null}>
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