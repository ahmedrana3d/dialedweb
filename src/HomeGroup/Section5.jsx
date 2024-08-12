import { Environment, OrbitControls, Image, useTexture, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import '../OurTeamMesh'
import * as THREE from 'three'
import { easing } from 'maath'
import { useAnimateText } from "../ScrollAnimations";

export const Section5 = () => {

  const isMobile = window.innerWidth <= 768;

  useAnimateText(".five-title");

  return (
    <section className="section five" >
    <div className="background-element-two" />
    <div className="background-element-grid-two" />
      <div className="five-content">
      <h1 className="five-title headline">Our Team</h1>
        <div className="mobile-scroll"></div>
        <div className="five-box" >
          <Canvas camera={{ position: [0, 3, isMobile ? 11 : 8.5], fov: 15 }}>
            <Carousel />
            <OrbitControls enableZoom={ false } enablePan={ false } enableRotate={ isMobile ? false : true } maxPolarAngle={ 1 } minPolarAngle={ 1.3 } />
            <Environment preset="dawn" />
            <Banner position={[0, -0.15, 0]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

function Carousel({ radius = 1.1, count = 7 }) {
  const ref = useRef()

  useFrame((state, delta) => {
    // Rotate the carousel group
    ref.current.rotation.y += 0.1 * delta
  })

  return (
    <group ref={ref}>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={`/o${Math.floor(i % 7) + 1}.png`}
          position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </group>
  )
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1, 0.2, delta)
  })
  return (
    <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props} >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}

function Banner(props) {
  const ref = useRef()
  const texture = useTexture('./ourteamimage.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  const scroll = useScroll()
  useFrame((state, delta) => {
    ref.current.material.map.offset.x += delta / 2
  })
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.3, 1.3, 0.075, 128, 16, true]} />
      <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  )
}

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const isMobile = window.innerWidth <= 768;

//   const endTransform = isMobile ? "-100%" : "-60%"; // Use "-30%" for mobile and "-60%" for larger screens
//   const x = useTransform(scrollYProgress, [0, 1], ["1%", endTransform]);

//   return (
//     <section ref={targetRef} className="five-horizontal">
//       <div className="five-horizontal-sticky">
//         <motion.div style={{ x }} className="five-horizontal-div">

//           <div className="five-horizontal-card-first">
//             <img className="five-card-text-image" src="ourteam.png" alt="" />
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image idan" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Founder & CEO</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Idan Zeidman</h1>
//             </div>
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image lorenzo" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Founder & CEO</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Lorenzo Noya</h1>
//             </div>
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image matvey" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Founder & COO</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Matvey Vasilyev</h1>
//             </div>
//           </div>

//           <div className="five-horizontal-card">
//             <div className="five-card-image gabriella" />
//             <div className="five-card-text-box">
//               <h1 className="five-card-title" >Social Media & <br /> Public Relations</h1>
//               <div className="five-card-border" />
//               <h1 className="five-card-description" >Gabriella Brookfield</h1>
//             </div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };
