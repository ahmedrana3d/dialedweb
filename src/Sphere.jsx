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
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".three",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(sphereRef.current.position, {
        x: -7,
        y: 5,
        z: 0,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
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
        x: 5,
        y: -5,
        z: 0,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
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

      .to(".three-content-box", {
        width: "90vw",
        height: "65vh",
        opacity: 1,
          scrollTrigger: {
            trigger: ".three-content-box",
            start: "top bottom",
            end: "center center",
            scrub: true,
            immediateRender: false,
          },
      })

    const words = ["Inspire", "Revolutionize", "Enhace", "Impress", "Transform"];

    let masterTl = gsap.timeline({repeat: -1}).pause();
    
    words.forEach(word => {
      let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
      tl.to('.typewriter-text', {duration: 1, text: word});
      masterTl.add(tl);
    });
    
    masterTl.play();

    })
    
  }, [])

  return (
    <group ref={sphereRef} position={ [ 5, -5, 0 ] } {...props} scale={0} dispose={null}>
      <group scale={0.0065}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
        >
            <meshStandardMaterial metalness={1} roughness={ 0.9 } color={ "#dcd7ff" }  />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/spheremodel.gltf')