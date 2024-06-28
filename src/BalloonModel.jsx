import useSpline from '@splinetool/r3f-spline'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

export default function BalloonModel({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/jLZEpaewguEWDwHO/scene.splinecode')

  const balloon = useRef()
  const tl = gsap.timeline()
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl
        .to(balloon.current.position, {
          x: -4.5,
          y: -3,
          z: 0,
          scrollTrigger: {
            trigger: ".four-content",
            start: "top center",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        // .to(balloon.current.scale, {
        //   x: 1.25,
        //   y: 1.25,
        //   z: 1.25,
        //   scrollTrigger: {
        //     trigger: ".balloonStart",
        //     start: "top center",
        //     end: "center center",
        //     markers: true,
        //     scrub: true,
        //     immediateRender: false,
        //   },
        // })

        .to(balloon.current.rotation, {
          y: Math.PI * 3,
          scrollTrigger: {
            trigger: ".four-content",
            start: "top bottom",
            end: "bottom 10%",
            scrub: true,
            immediateRender: false,
          },
        })

        // .to(balloon.current.position, {
        //   x: -5,
        //   y: 0,
        //   z: 0,
        //   scrollTrigger: {
        //     trigger: ".four-content-two",
        //     start: "top bottom",
        //     end: "bottom top",
        //     scrub: true,
        //     immediateRender: false,
        //   },
        // })

        // .to(balloon.current.rotation, {
        //   y: Math.PI * 4,
        //   scrollTrigger: {
        //     trigger: ".four-content-two",
        //     start: "top bottom",
        //     end: "bottom top",
        //     scrub: true,
        //     immediateRender: false,
        //   },
        // })

    });

  }, []);

  return (
    <>
      <color attach="background" args={['#3f3a81']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
        <group ref={balloon} name="Group" position={[4.5, 1, 0]}>
            <group name="Balloon" position={[0, 0.5, 0]} scale={0.0135}>
              <mesh
                name="Cord"
                geometry={nodes.Cord.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[7.59, 0.28, -0.46]}
                scale={0.45}
              />
              <mesh
                name="baseballoon"
                geometry={nodes.baseballoon.geometry}
                material={materials['baseballoon Material']}
                castShadow
                receiveShadow
                position={[0.41, 4.34, 0.61]}
                scale={0.14}
              />
              <mesh
                name="BALLOON"
                geometry={nodes.BALLOON.geometry}
                material={materials['Balloon 2']}
                castShadow
                receiveShadow
                position={[0.72, 52.63, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.9}
              />
            </group>
          </group>
          <directionalLight
            name="Directional Light"
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            color="#caa7dd"
            position={[-397.73, 437.76, 300]}
          />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}




