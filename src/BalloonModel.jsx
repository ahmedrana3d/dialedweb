import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useLayoutEffect } from "react";

export default function BalloonModel(props) {

  const coin = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST TO SECOND


      tl
      // .to(coin.current.rotation, {
      //   y: Math.PI / 0.75,
      //   scrollTrigger: {
      //     trigger: ".six",
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(".four-experience", {
      //   position: "fixed",
      //   scrollTrigger: {
      //     trigger: ".four-content-two",
      //     start: "top bottom",
      //     end: "bottom 100%",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // .to(".four-experience", {
      //   position: "relative",
      //   scrollTrigger: {
      //     trigger: ".five",
      //     start: "top bottom",
      //     end: "bottom 100%",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // });

      

    })
    

  }, [])
  const { nodes, materials } = useGLTF('./eth.glb')
  return (
    <mesh ref={coin} >
      <sphereGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

useGLTF.preload('./eth.glb')