import React, { useRef, useEffect, Suspense, useLayoutEffect } from 'react'
import { useGLTF, useAnimations, useAspect, useVideoTexture, useTexture, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./lap.glb')
  const { actions } = useAnimations(animations, group)

  const { camera } = useThree()

  useEffect(() => {
    if (actions.ScreenOpen) {
      actions.ScreenOpen.setLoop(THREE.LoopOnce);
      actions.ScreenOpen.clampWhenFinished = true;
      setTimeout(() => {
        actions.ScreenOpen.play();
      }, 1000); // 1000 milliseconds = 1 second
    }
  }, [actions]);

  const size = useAspect(1800, 1000)

  const laptop = useRef()
  const controlsRef = useRef()
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
    const timer = setTimeout(() => {
      cameraLoads();
    }, 800);

    // Cleanup the timer in case the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl

      .to(laptop.current.rotation, {
        x: 0,
        y: Math.PI * -0.3,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
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

      // .to(".carousel-content", {
      //   ease: "none",
      //   x: () => -(cont.scrollWidth - window.innerWidth),
      //   scrollTrigger: {
      //     trigger: cont,
      //     pin: cont,
      //     start: "center center",
      //     end: () => "+=" + (cont.scrollWidth - window.innerWidth),
      //     scrub: true,
      //     invalidateOnRefresh: true,
      //   }
      // })

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
    <>
    <OrbitControls target={ [ 0, 0, 0 ] } ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
    <group position={ [ -1, 0, 0 ] } ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group ref={laptop} name="Macbook" rotation={ [ Math.PI * 0.05,  Math.PI * -0.1, 0 ] } position={[0, -0.860394 , 0]} scale={0.14}>
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.HeadPhoneHole}
          />
          <mesh
            name="Circle001_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.USB_C_INSIDE}
          />
          <mesh
            name="Circle001_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={materials.TouchbarBorder}
          />
          <mesh
            name="Circle001_4"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_4.geometry}
            material={materials.Keyboard}
          />
          <group name="Bottom" position={[0, -0.509, 0]} scale={5.796}>
            <mesh
              name="Circle006"
              castShadow
              receiveShadow
              geometry={nodes.Circle006.geometry}
              material={materials['Frame.001']}
            />
            <mesh
              name="Circle006_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle006_1.geometry}
              material={materials.USB_C_INSIDE}
            />
          </group>
          <group name="Keyboard" position={[-11.786, -0.15, -8.301]} scale={5.796}>
            <mesh
              name="Circle"
              castShadow
              receiveShadow
              geometry={nodes.Circle.geometry}
              material={materials['Keyboard.001']}
            />
            <mesh
              name="Circle_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle_1.geometry}
              material={materials.Key}
            />
            <mesh
              name="Circle_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle_2.geometry}
              material={materials.Touchbar}
            />
          </group>
          <mesh
            name="KeyboardKeyHole"
            castShadow
            receiveShadow
            geometry={nodes.KeyboardKeyHole.geometry}
            material={materials['Keyboard.001']}
            position={[-11.786, -0.152, -8.301]}
            scale={5.796}
          />
          <mesh
            name="RubberFoot"
            castShadow
            receiveShadow
            geometry={nodes.RubberFoot.geometry}
            material={materials.DarkRubber}
            position={[-11.951, -0.751, 7.857]}
            scale={5.796}
          />
          <group name="ScreenHinge" position={[0.011, -0.211, -10.559]} scale={5.796}>
            <mesh
              name="Circle012"
              castShadow
              receiveShadow
              geometry={nodes.Circle012.geometry}
              material={materials.HingeBlack}
            />
            <mesh
              name="Circle012_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle012_1.geometry}
              material={materials.HingeMetal}
            />
          </group>
          <group name="SpeakerLeft" position={[-15.026, 0.031, 0.604]} scale={5.796}>
            <mesh
              name="Circle009"
              castShadow
              receiveShadow
              geometry={nodes.Circle009.geometry}
              material={materials['Frame.001']}
            />
            <mesh
              name="Circle009_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle009_1.geometry}
              material={materials.SpeakerHole}
            />
          </group>
          <group name="SpeakerRight" position={[12.204, 0.031, 0.604]} scale={5.796}>
            <mesh
              name="Circle003"
              castShadow
              receiveShadow
              geometry={nodes.Circle003.geometry}
              material={materials['Frame.001']}
            />
            <mesh
              name="Circle003_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle003_1.geometry}
              material={materials.SpeakerHole}
            />
          </group>
          <group
            name="Top"
            position={[0.007, -0.472, -10.412]}
            rotation={[3.13, 0, 0]}
            scale={[5.796, 5.796, 5.716]}>
            <mesh
              name="Circle002"
              castShadow
              receiveShadow
              geometry={nodes.Circle002.geometry}
              material={materials['Frame.002']}
            />
            <mesh
              name="Circle002_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_1.geometry}
              material={materials.Screen}
            />
            <mesh
              name="Circle002_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_2.geometry}
              material={materials.ScreenGlass}
            />
            <mesh
              name="Circle002_3"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_3.geometry}
              material={materials.Rubber}
            />
            <mesh
              name="Circle002_4"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_4.geometry}
              material={materials.DisplayGlass}
            />
            <mesh
              name="AppleLogo000"
              castShadow
              receiveShadow
              geometry={nodes.AppleLogo000.geometry}
              material={materials['AppleLogo.004']}
              position={[0.005, -0.111, -1.795]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.579}
            />
            <mesh
              name="FrontCameraRing001"
              castShadow
              receiveShadow
              geometry={nodes.FrontCameraRing001.geometry}
              material={materials['CameraRIngBlack.002']}
              position={[-0.028, -0.068, -3.597]}
              rotation={[-1.32, 0, 0]}
              scale={[1, 1.013, 1.001]}
            />
            <mesh
              name="PlainMesh"
              castShadow
              receiveShadow
              geometry={nodes.PlainMesh.geometry}
              material={materials.red}
              position={[-0.001, -0.062, -1.912]}
              rotation={[0, Math.PI * 1, 0]}
              scale={[2.507, 2.507, 1.553]}
            >
              <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
                <VideoMaterial url="10.mp4" />
              </Suspense>
            </mesh>
          </group>
        </group>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('./lap.glb')

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}